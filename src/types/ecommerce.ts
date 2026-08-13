export type EcommerceCategory = {
  id: string;
  slug: string;
  name: string;
  image?: string;
  parentId?: string; // For subcategories
  itemCount?: number;
};

export type ProductVariant = {
  id: string;
  name: string; // e.g., "S", "M", "L", "Red", "Blue"
  value: string;
  sku: string;
  price: number; // Override base price if variant is more expensive
  stock: number;
  type: "COLOR" | "SIZE" | "MATERIAL" | "STORAGE" | "WEIGHT";
};

export type ProductReview = {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpfulCount?: number;
};

export type EcommerceProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number; // For discounts
  currency: string;
  images: string[];
  thumbnail: string;
  brand: string;
  categoryIds: string[];
  stock: number;
  sku: string;
  rating: number;
  reviewCount: number;
  features?: string[]; // E.g., "Waterproof", "100% Cotton"
  specifications?: Record<string, string>; // For electronics mostly
  variants?: ProductVariant[];
  tags?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  bestseller?: boolean;
};

export type CartItem = {
  cartItemId: string; // Unique ID for the cart line (important if same product added with diff variants)
  product: EcommerceProduct;
  quantity: number;
  selectedVariants?: Record<string, ProductVariant>; // e.g., { SIZE: variantObj, COLOR: variantObj }
};

export type ShippingAddress = {
  id: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
};

export type Order = {
  id: string;
  orderNumber: string;
  date: string;
  status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
};
