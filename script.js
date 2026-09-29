let products = [];
let archivedProducts = [];
let auditRecords = [];

let editingIndex = -1;

const productImage = document.getElementById("productImage");
const imagePreview = document.getElementById("imagePreview");
const uploadText = document.getElementById("uploadText");
const category = document.getElementById("category");
const colorGroup = document.getElementById("colorGroup");

productImage.addEventListener("change", function() {

    const file = productImage.files[0];

    if (file) {

        imagePreview.src = URL.createObjectURL(file);
        imagePreview.style.display = "block";
        uploadText.style.display = "none";

    }

});

category.addEventListener("change", function() {

    updateColorField();

});

function updateColorField() {

    if (
        category.value === "Body Care Products" ||
        category.value === "Perfumes"
    ) {

        colorGroup.style.display = "none";
        document.getElementById("color").value = "";

    } else {

        colorGroup.style.display = "block";

    }

}

function convertToLowerCase(text) {

    let result = "";

    for (let i = 0; i < text.length; i++) {

        let character = text[i];

        let code = character.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            character = String.fromCharCode(code + 32);
        }

        result += character;

    }

    return result;

}

function searchText(text, search) {

    if (search === "") {
        return true;
    }

    if (search.length > text.length) {
        return false;
    }

    for (
        let i = 0;
        i <= text.length - search.length;
        i++
    ) {

        let match = true;

        for (let j = 0; j < search.length; j++) {

            if (text[i + j] !== search[j]) {

                match = false;
                break;

            }

        }

        if (match) {
            return true;
        }

    }

    return false;

}

function getDateTime() {

    const now = new Date();

    return (
        now.toLocaleDateString("en-PH") +
        " " +
        now.toLocaleTimeString("en-PH", {
            hour: "2-digit",
            minute: "2-digit"
        })
    );

}

function addAuditRecord(
    product,
    action,
    changes
) {

    const record = {

        date: getDateTime(),

        user: "Administrator",

        productCode: product.code,

        productName: product.name,

        action: action,

        changes: changes

    };

    for (
        let i = auditRecords.length;
        i > 0;
        i--
    ) {

        auditRecords[i] =
            auditRecords[i - 1];

    }

    auditRecords[0] = record;

}

function addProduct() {

    const file = productImage.files[0];

    if (!file && editingIndex === -1) {

        alert("Please upload a product image.");
        return;

    }

    const selectedCategory =
        document.getElementById("category").value;

    const product = {

        image:
            file
                ? URL.createObjectURL(file)
                : products[editingIndex].image,

        code:
            document
                .getElementById("productCode")
                .value
                .trim(),

        name:
            document
                .getElementById("productName")
                .value
                .trim(),

        category:
            selectedCategory,

        price:
            document
                .getElementById("price")
                .value,

        size:
            document
                .getElementById("size")
                .value
                .trim(),

        color:
            selectedCategory === "Body Care Products" ||
            selectedCategory === "Perfumes"
                ? ""
                : document
                    .getElementById("color")
                    .value
                    .trim()

    };

    if (
        !product.code ||
        !product.name ||
        !product.category ||
        !product.price
    ) {

        alert(
            "Please complete the required product information."
        );

        return;

    }

    if (editingIndex === -1) {

        products[products.length] = product;

        addAuditRecord(
            product,
            "Added",
            "Product added"
        );

    } else {

        const oldProduct =
            products[editingIndex];

        let changes =
            "Product information updated";

        if (oldProduct.price !== product.price) {

            changes =
                "Price changed from ₱" +
                oldProduct.price +
                " to ₱" +
                product.price;

        } else if (
            oldProduct.name !== product.name
        ) {

            changes =
                "Product name changed from " +
                oldProduct.name +
                " to " +
                product.name;

        } else if (
            oldProduct.category !== product.category
        ) {

            changes =
                "Category changed from " +
                oldProduct.category +
                " to " +
                product.category;

        } else if (
            oldProduct.size !== product.size
        ) {

            changes =
                "Size changed from " +
                oldProduct.size +
                " to " +
                product.size;

        } else if (
            oldProduct.color !== product.color
        ) {

            changes =
                "Color changed from " +
                oldProduct.color +
                " to " +
                product.color;

        } else if (
            oldProduct.code !== product.code
        ) {

            changes =
                "Product code changed from " +
                oldProduct.code +
                " to " +
                product.code;

        }

        products[editingIndex] = product;

        addAuditRecord(
            product,
            "Updated",
            changes
        );

        editingIndex = -1;

        document.getElementById(
            "addProductButton"
        ).textContent = "Add Product";

    }

    displayProducts();
    updateAudit();
    clearForm();

}

function displayProducts() {

    const container =
        document.getElementById(
            "productContainer"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        ).value;

    const search =
        convertToLowerCase(
            searchInput
        );

    const selectedCategory =
        document.getElementById(
            "filterCategory"
        ).value;

    container.innerHTML = "";

    let foundProducts = 0;

    for (
        let i = 0;
        i < products.length;
        i++
    ) {

        const product =
            products[i];

        const productName =
            convertToLowerCase(
                product.name
            );

        const productCode =
            convertToLowerCase(
                product.code
            );

        const matchesSearch =
            searchText(
                productName,
                search
            ) ||
            searchText(
                productCode,
                search
            );

        const matchesCategory =
            selectedCategory === "" ||
            product.category ===
                selectedCategory;

        if (
            matchesSearch &&
            matchesCategory
        ) {

            foundProducts++;

            let details =
                `Size: ${product.size}`;

            if (product.color) {

                details +=
                    ` · Color: ${product.color}`;

            }

            container.innerHTML += `

                <div class="product-card">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="product-info">

                        <span class="product-code">
                            ${product.code}
                        </span>

                        <h3>
                            ${product.name}
                        </h3>

                        <span class="category">
                            ${product.category}
                        </span>

                        <p class="product-details">
                            ${details}
                        </p>

                        <div class="product-bottom">

                            <span class="price">
                                ₱${product.price}
                            </span>

                            <div class="actions">

                                <button
                                    onclick="editProduct(${i})"
                                >
                                    Edit
                                </button>

                                <button
                                    onclick="deleteProduct(${i})"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            `;

        }

    }

    if (foundProducts === 0) {

        container.innerHTML = `
            <div class="empty">
                No products found.
            </div>
        `;

    }

}

function deleteProduct(index) {

    const product =
        products[index];

    if (!product) {
        return;
    }

    const confirmDelete =
        confirm(
            `Are you sure you want to delete "${product.name}"?`
        );

    if (!confirmDelete) {
        return;
    }

    const archivedProduct = {

        image: product.image,

        code: product.code,

        name: product.name,

        category: product.category,

        price: product.price,

        size: product.size,

        color: product.color,

        dateArchived: getDateTime()

    };

    for (
        let i = index;
        i < products.length - 1;
        i++
    ) {

        products[i] =
            products[i + 1];

    }

    products.length =
        products.length - 1;

    for (
        let i = archivedProducts.length;
        i > 0;
        i--
    ) {

        archivedProducts[i] =
            archivedProducts[i - 1];

    }

    archivedProducts[0] =
        archivedProduct;

    addAuditRecord(
        product,
        "Deleted",
        "Product deleted and moved to Product Archive"
    );

    displayProducts();
    displayArchivedProducts();
    updateAudit();

}

function editProduct(index) {

    const product =
        products[index];

    if (!product) {
        return;
    }

    editingIndex = index;

    document.getElementById(
        "productCode"
    ).value =
        product.code;

    document.getElementById(
        "productName"
    ).value =
        product.name;

    document.getElementById(
        "category"
    ).value =
        product.category;

    document.getElementById(
        "price"
    ).value =
        product.price;

    document.getElementById(
        "size"
    ).value =
        product.size;

    document.getElementById(
        "color"
    ).value =
        product.color;

    updateColorField();

    imagePreview.src =
        product.image;

    imagePreview.style.display =
        "block";

    uploadText.style.display =
        "none";

    document.getElementById(
        "addProductButton"
    ).textContent =
        "Update Product";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function clearForm() {

    document.getElementById(
        "productCode"
    ).value = "";

    document.getElementById(
        "productName"
    ).value = "";

    document.getElementById(
        "category"
    ).value = "";

    document.getElementById(
        "price"
    ).value = "";

    document.getElementById(
        "size"
    ).value = "";

    document.getElementById(
        "color"
    ).value = "";

    productImage.value = "";

    imagePreview.src = "";

    imagePreview.style.display =
        "none";

    uploadText.style.display =
        "block";

    colorGroup.style.display =
        "block";

    editingIndex = -1;

    document.getElementById(
        "addProductButton"
    ).textContent =
        "Add Product";

}

function displayAudit() {

    const table =
        document.getElementById(
            "auditTable"
        );

    const searchInput =
        document.getElementById(
            "auditSearchInput"
        ).value;

    const search =
        convertToLowerCase(
            searchInput
        );

    const filter =
        document.getElementById(
            "actionFilter"
        ).value;

    table.innerHTML = "";

    let filteredRecords = [];

    for (
        let i = 0;
        i < auditRecords.length;
        i++
    ) {

        const audit =
            auditRecords[i];

        const productCode =
            convertToLowerCase(
                audit.productCode
            );

        const productName =
            convertToLowerCase(
                audit.productName
            );

        const matchesSearch =
            searchText(
                productCode,
                search
            ) ||
            searchText(
                productName,
                search
            );

        const matchesFilter =
            filter === "" ||
            audit.action === filter;

        if (
            matchesSearch &&
            matchesFilter
        ) {

            filteredRecords[
                filteredRecords.length
            ] = audit;

        }

    }

    for (
        let i = 0;
        i < filteredRecords.length;
        i++
    ) {

        const audit =
            filteredRecords[i];

        let actionClass = "";

        if (audit.action === "Added") {

            actionClass = "action-added";

        } else if (audit.action === "Updated") {

            actionClass = "action-updated";

        } else if (audit.action === "Deleted") {

            actionClass = "action-deleted";

        } else if (audit.action === "Restored") {

            actionClass = "action-restored";

        }

        table.innerHTML += `

            <tr>

                <td>
                    ${audit.date}
                </td>

                <td>
                    ${audit.user}
                </td>

                <td>
                    ${audit.productCode}
                </td>

                <td>
                    ${audit.productName}
                </td>

                <td>

                    <span class="action-badge ${actionClass}">
                        ${audit.action}
                    </span>

                </td>

                <td>
                    ${audit.changes}
                </td>

            </tr>

        `;

    }

    document.getElementById(
        "recordCount"
    ).textContent =
        filteredRecords.length +
        " Records";

    document.getElementById(
        "emptyMessage"
    ).style.display =
        filteredRecords.length === 0
            ? "block"
            : "none";

}

function updateAudit() {

    let added = 0;
    let updated = 0;
    let deleted = 0;

    for (
        let i = 0;
        i < auditRecords.length;
        i++
    ) {

        if (
            auditRecords[i].action === "Added"
        ) {

            added++;

        } else if (
            auditRecords[i].action === "Updated"
        ) {

            updated++;

        } else if (
            auditRecords[i].action === "Deleted"
        ) {

            deleted++;

        }

    }

    document.getElementById(
        "totalActivities"
    ).textContent =
        auditRecords.length;

    document.getElementById(
        "addedCount"
    ).textContent =
        added;

    document.getElementById(
        "updatedCount"
    ).textContent =
        updated;

    document.getElementById(
        "deletedCount"
    ).textContent =
        deleted;

    displayAudit();

}

function displayArchivedProducts() {

    const container =
        document.getElementById(
            "archiveContainer"
        );

    const searchInput =
        document.getElementById(
            "archiveSearchInput"
        ).value;

    const search =
        convertToLowerCase(
            searchInput
        );

    const selectedCategory =
        document.getElementById(
            "archiveFilterCategory"
        ).value;

    container.innerHTML = "";

    let filteredProducts = [];

    for (
        let i = 0;
        i < archivedProducts.length;
        i++
    ) {

        const product =
            archivedProducts[i];

        const productName =
            convertToLowerCase(
                product.name
            );

        const productCode =
            convertToLowerCase(
                product.code
            );

        const matchesSearch =
            searchText(
                productName,
                search
            ) ||
            searchText(
                productCode,
                search
            );

        const matchesCategory =
            selectedCategory === "" ||
            product.category ===
                selectedCategory;

        if (
            matchesSearch &&
            matchesCategory
        ) {

            filteredProducts[
                filteredProducts.length
            ] = {
                product: product,
                index: i
            };

        }

    }

    if (
        filteredProducts.length === 0
    ) {

        container.innerHTML = `
            <div class="empty">
                No archived products found.
            </div>
        `;

        document.getElementById(
            "archiveRecordCount"
        ).textContent =
            "0 Records";

        return;

    }

    for (
        let i = 0;
        i < filteredProducts.length;
        i++
    ) {

        const product =
            filteredProducts[i].product;

        const index =
            filteredProducts[i].index;

        let details =
            `Price: ₱${product.price}`;

        if (product.size) {

            details +=
                ` · Size: ${product.size}`;

        }

        if (product.color) {

            details +=
                ` · Color: ${product.color}`;

        }

        const imageHTML =
            product.image
                ? `
                    <img
                        class="archive-image"
                        src="${product.image}"
                        alt="${product.name}"
                    >
                `
                : `
                    <div class="archive-image-placeholder">
                        No Image
                    </div>
                `;

        container.innerHTML += `

            <div class="archive-card">

                ${imageHTML}

                <div class="archive-card-body">

                    <div class="archive-top">

                        <span class="archive-code">
                            ${product.code}
                        </span>

                        <span class="category">
                            ${product.category}
                        </span>

                    </div>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="archive-details">
                        ${details}
                    </p>

                    <p class="archive-date">
                        Archived: ${product.dateArchived}
                    </p>

                    <div class="archive-actions">

                        <button
                            class="restore-btn"
                            onclick="restoreArchivedProduct(${index})"
                        >
                            Restore
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteArchivedProduct(${index})"
                        >
                            Delete Permanently
                        </button>

                    </div>

                </div>

            </div>

        `;

    }

    document.getElementById(
        "archiveRecordCount"
    ).textContent =
        filteredProducts.length +
        " Records";

}

function restoreArchivedProduct(index) {

    const product =
        archivedProducts[index];

    if (!product) {
        return;
    }

    const restoredProduct = {

        image: product.image,

        code: product.code,

        name: product.name,

        category: product.category,

        price: product.price,

        size: product.size,

        color: product.color

    };

    products[products.length] =
        restoredProduct;

    addAuditRecord(
        restoredProduct,
        "Restored",
        "Product restored from Product Archive"
    );

    for (
        let i = index;
        i < archivedProducts.length - 1;
        i++
    ) {

        archivedProducts[i] =
            archivedProducts[i + 1];

    }

    archivedProducts.length =
        archivedProducts.length - 1;

    displayProducts();
    displayArchivedProducts();
    updateAudit();

    alert(
        `"${product.name}" has been restored.`
    );

}

function deleteArchivedProduct(index) {

    const product =
        archivedProducts[index];

    if (!product) {
        return;
    }

    const confirmDelete =
        confirm(
            `Permanently delete "${product.name}" from the archive?`
        );

    if (!confirmDelete) {
        return;
    }

    for (
        let i = index;
        i < archivedProducts.length - 1;
        i++
    ) {

        archivedProducts[i] =
            archivedProducts[i + 1];

    }

    archivedProducts.length =
        archivedProducts.length - 1;

    displayArchivedProducts();

}

function toggleMobileSidebar() {

    document
        .querySelector(".sidebar")
        .classList.toggle("mobile-open");

    document
        .querySelector(".sidebar-overlay")
        .classList.toggle("active");

}

function showProductPage(page, event) {

    if (event) {
        event.preventDefault();
    }

    document.getElementById(
        "productsPage"
    ).style.display =
        page === "products"
            ? "block"
            : "none";

    document.getElementById(
        "auditPage"
    ).style.display =
        page === "audit"
            ? "block"
            : "none";

    document.getElementById(
        "archivePage"
    ).style.display =
        page === "archive"
            ? "block"
            : "none";

    const subnavItems =
        document.querySelectorAll(
            ".product-section .subnav"
        );

    for (
        let i = 0;
        i < subnavItems.length;
        i++
    ) {

        subnavItems[i].classList.toggle(
            "active",
            subnavItems[i].getAttribute(
                "data-page"
            ) === page
        );

    }

    if (page === "audit") {
        updateAudit();
    }

    if (page === "archive") {
        displayArchivedProducts();
    }

    document
        .querySelector(".sidebar")
        .classList.remove("mobile-open");

    document
        .querySelector(".sidebar-overlay")
        .classList.remove("active");

}

function toggleProductMenu(event) {

    event.preventDefault();
    event.stopPropagation();

    const menu =
        document.getElementById(
            "productMenu"
        );

    const arrow =
        document.getElementById(
            "productToggle"
        );

    if (
        menu.style.display === "none"
    ) {

        menu.style.display =
            "block";

        arrow.textContent =
            "−";

    } else {

        menu.style.display =
            "none";

        arrow.textContent =
            "+";

    }

}

updateColorField();
displayProducts();
displayAudit();
displayArchivedProducts();
updateAudit();
