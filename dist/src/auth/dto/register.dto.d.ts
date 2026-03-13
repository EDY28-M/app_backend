export declare enum AuthProviderDto {
    PHONE = "phone",
    EMAIL = "email",
    GOOGLE = "google"
}
export declare class RegisterDto {
    first_name: string;
    last_name?: string;
    auth_provider: AuthProviderDto;
    phone_e164?: string;
    email?: string;
    password?: string;
    google_token?: string;
}
