export interface VendorItem {
    id: string;
    name: string;
    category: string;
    icon: string;
  }

  export type PermissionStatus = 'paid' | 'pending';

export interface Permission {
  id: string;
  month: string;
  year: string;
  code: string;
  status: PermissionStatus;
  colorHex: string;
}