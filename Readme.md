# Admin Panel Template

A static admin panel template for managing products, sales, purchases, coupons, staff, and reports. Built with Bootstrap, ApexCharts, and CKEditor for a modern, responsive interface.

## Features

- **Product Management**: Add, list, and categorize products with barcode printing capability
- **Sales & Purchases**: Track sales, purchases, and import transactions
- **Staff Management**: Manage employees and staff accounts
- **Special Offers**: Handle coupons and gift cards
- **Rich UI Components**: Charts, rich text editor, and responsive layouts
- **Delivery Tracking**: Monitor delivery status and lists

## Pages

### Authentication

- `login.html` - User authentication interface

### Dashboard

- `index.html` - Main dashboard / landing page

### Products & Inventory

- `add-product.html` - Create new products
- `products-list.html` - View and manage products
- `print-barcode.html` - Generate product barcodes
- `category.html` - Manage product categories

### Sales & Purchases

- `sale.html` & `add-sale.html` - Sales management
- `purchase-list.html` & `add-purchase.html` - Purchase tracking
- `import-sale.html` & `import-purchase.html` - Bulk import tools
- `add-quotation.html` - Create quotations

### Special Offers

- `coupon.html` - Manage discount coupons
- `gift-card.html` - Gift card system

### Staff & Delivery

- `staff-emp.html` - Employee management
- `delivery-list.html` - Track deliveries

## Technology Stack

- **CSS Framework**: Bootstrap (`css/bootstrap/bootstrap.min.css`)
- **JavaScript Libraries**:
  - Bootstrap Bundle (`js/bootstrap/bootstrap.bundle.min.js`)
  - ApexCharts (`js/apexchart/apexcharts.min.js`) - For data visualization
  - CKEditor (`js/editor/ckeditor.js`) - Rich text editing
- **Custom Assets**:
  - CSS: `common.css`, `header.css`, `login.css`, `modal.css`, `responsive.css`, `sidebar.css`
  - JavaScript: `common.js`

## Quick Start

### Simple Preview

Open `index.html` directly in your browser.

### Recommended Setup (with proper HTTP server)

Using Python 3:

```bash
python3 -m http.server 8000
```

Using Node.js:

```bash
npm install -g http-server
http-server -p 8000
```

Then visit http://localhost:8000 in your browser.

## Integration Notes

This is a static template that needs to be integrated with a backend for full functionality. When implementing, consider:

- Authentication system integration
- Database connection for CRUD operations
- API endpoints for each feature
- Form validation and security measures
- File upload handling for products and imports

## Development

The project structure is organized as follows:

```
├── css/           # Stylesheets
├── js/            # JavaScript files
├── *.html         # Page templates
└── Readme.md      # This file
```

## License

[Add your license information here]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
