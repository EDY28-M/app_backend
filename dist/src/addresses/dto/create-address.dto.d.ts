export declare class CreateAddressDto {
    label?: string;
    contact_name?: string;
    contact_phone?: string;
    country_code?: string;
    region: string;
    province: string;
    district: string;
    city: string;
    address_line1: string;
    address_line2?: string;
    reference?: string;
    latitude: number;
    longitude: number;
    is_default?: boolean;
}
