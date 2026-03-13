export declare enum OtpPurposeDto {
    REGISTER = "register",
    LOGIN = "login",
    VERIFY_PHONE = "verify_phone",
    RESET_PASSWORD = "reset_password"
}
export declare enum OtpChannelDto {
    SMS = "sms",
    WHATSAPP = "whatsapp",
    EMAIL = "email"
}
export declare class SendOtpDto {
    target: string;
    channel: OtpChannelDto;
    purpose: OtpPurposeDto;
}
export declare class VerifyOtpDto {
    target: string;
    code: string;
    purpose: OtpPurposeDto;
}
