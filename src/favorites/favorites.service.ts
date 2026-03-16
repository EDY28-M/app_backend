import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async add(userId: string, storeId: string) {
    const store = await this.prisma.stores.findFirst({
      where: { id: storeId, status: 'active' },
    });
    if (!store) throw new NotFoundException('Tienda no encontrada');

    const existing = await this.prisma.customer_favorites.findUnique({
      where: { user_id_store_id: { user_id: userId, store_id: storeId } },
    });
    if (existing) throw new ConflictException('Ya está en favoritos');

    return this.prisma.customer_favorites.create({
      data: { user_id: userId, store_id: storeId },
      include: {
        stores: {
          select: {
            id: true,
            name: true,
            slug: true,
            cover_image_url: true,
            avg_rating: true,
            total_reviews: true,
            store_branches: {
              where: { status: 'active' },
              take: 1,
              select: { id: true },
            },
          },
        },
      },
    });
  }

  async remove(userId: string, storeId: string) {
    const fav = await this.prisma.customer_favorites.findUnique({
      where: { user_id_store_id: { user_id: userId, store_id: storeId } },
    });
    if (!fav) throw new NotFoundException('No está en favoritos');

    await this.prisma.customer_favorites.delete({
      where: { id: fav.id },
    });
    return { success: true };
  }

  async list(userId: string) {
    const favs = await this.prisma.customer_favorites.findMany({
      where: { user_id: userId },
      include: {
        stores: {
          include: {
            business_categories: { select: { code: true, name: true } },
            store_branches: {
              where: { status: 'active' },
              take: 1,
              include: {
                branch_catalog_items: {
                  where: { is_available: true },
                  take: 1,
                  include: {
                    catalog_items: { select: { image_url: true, name: true } },
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { created_at: 'desc' },
    });

    return favs.map((f) => ({
      id: f.stores.id,
      name: f.stores.name,
      slug: f.stores.slug,
      category: f.stores.business_categories,
      avg_rating: f.stores.avg_rating ? Number(f.stores.avg_rating) : null,
      branch_id: f.stores.store_branches[0]?.id ?? null,
      image_url:
        f.stores.cover_image_url ||
        f.stores.store_branches[0]?.branch_catalog_items[0]?.catalog_items?.image_url ||
        null,
    }));
  }

  async isFavorite(userId: string, storeId: string): Promise<boolean> {
    const fav = await this.prisma.customer_favorites.findUnique({
      where: { user_id_store_id: { user_id: userId, store_id: storeId } },
    });
    return !!fav;
  }

  async getFavoriteStoreIds(userId: string): Promise<string[]> {
    const favs = await this.prisma.customer_favorites.findMany({
      where: { user_id: userId },
      select: { store_id: true },
    });
    return favs.map((f) => f.store_id);
  }
}
