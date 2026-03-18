import { PrismaService } from '../prisma/prisma.service';
export declare class FavoritesService {
    private prisma;
    constructor(prisma: PrismaService);
    add(userId: string, storeId: string): Promise<{
        stores: {
            store_branches: {
                id: string;
            }[];
            id: string;
            name: string;
            slug: string;
            cover_image_url: string | null;
            avg_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_reviews: number;
        };
    } & {
        id: string;
        user_id: string;
        created_at: Date;
        store_id: string;
    }>;
    remove(userId: string, storeId: string): Promise<{
        success: boolean;
    }>;
    list(userId: string): Promise<{
        id: string;
        name: string;
        slug: string;
        category: {
            name: string;
            code: string;
        };
        avg_rating: number | null;
        branch_id: string;
        image_url: string | null;
    }[]>;
    isFavorite(userId: string, storeId: string): Promise<boolean>;
    getFavoriteStoreIds(userId: string): Promise<string[]>;
}
