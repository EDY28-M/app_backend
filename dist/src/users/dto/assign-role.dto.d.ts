export declare enum RoleScopeDto {
    PLATFORM = "platform",
    MERCHANT = "merchant",
    STORE_BRANCH = "store_branch"
}
export declare class AssignRoleDto {
    role_code: string;
    scope_type: RoleScopeDto;
    scope_id?: string;
}
