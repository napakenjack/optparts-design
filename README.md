# OptParts Marketplace Frontend (Vite + React + TypeScript)

Production-ready static-friendly multi-page frontend blueprint for an auto-parts marketplace and admin console.

## Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages Static Compatibility

- Vite configured with `base: './'`.
- App uses `HashRouter` to avoid 404s on direct route reloads.
- Internal links use router paths; all generated assets resolve relative to project root.

## Route map

### Public
- `/#/` Home
- `/#/search` Search results
- `/#/product/:article` Product details
- `/#/cart` Cart
- `/#/checkout` Checkout
- `/#/order-success` Order success
- `/#/auth` Login / registration

### Account
- `/#/account/profile`
- `/#/account/orders`
- `/#/account/orders/:id`

### Admin
- `/#/admin/login`
- `/#/admin`
- `/#/admin/suppliers`
- `/#/admin/suppliers/:id`
- `/#/admin/markup`
- `/#/admin/offer-rules`
- `/#/admin/orders`
- `/#/admin/orders/:id`
- `/#/admin/monitoring`

## Component inventory

- Layout: `PublicLayout`, `AccountLayout`, `AdminLayout`
- Navigation/UI shell: `Header`, `Footer`, `AccountSidebar`, `AdminSidebar`
- Search/storefront: `SearchBar`, `SearchSuggestions`, `ProductCard`, `SupplierOffersTable`
- Cart/checkout: `CartItem`, `QuantitySelector`, `CheckoutForm`
- Shared status/data: `StatusBadge`, `StatsCard`, `DataTable`, `Pagination`, `EmptyState`, `ErrorState`, `LoadingState`
