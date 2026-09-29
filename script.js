let products = [
    {
        id: "LL-001",
        code: "LL-001",
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        colors: ["Black and White Polka", "Light Blue", "Gray", "Black"],
        scents: [],
        image: "image/sophia-skirt.jpg"
    },
    {
        id: "LL-002",
        code: "LL-002",
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        colors: ["White", "Pink", "Black"],
        scents: [],
        image: "image/nov-mardi-tshirt.jpg"
    },
    {
        id: "LL-003",
        code: "LL-003",
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        colors: ["Fixed Color"],
        scents: [],
        image: "image/basic-chic01-terno.jpg"
    },
    {
        id: "LL-004",
        code: "LL-004",
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        sizes: [],
        colors: ["Brown", "Tan", "Pink", "Black", "Light Blue"],
        scents: [],
        image: "image/sami-tshirt.jpg"
    },
    {
        id: "LL-005",
        code: "LL-005",
        name: "Alada Soap",
        category: "Body Care Products",
        price: 350,
        sizes: [],
        colors: [],
        scents: [],
        image: "image/alada-soap.jpg"
    },
    {
        id: "LL-006",
        code: "LL-006",
        name: "Dewy Gluta Soap",
        category: "Body Care Products",
        price: 199,
        sizes: [],
        colors: [],
        scents: [],
        image: "image/dewy-gluta-soap.jpg"
    },
    {
        id: "LL-007",
        code: "LL-007",
        name: "Serene Skin Soap",
        category: "Body Care Products",
        price: 299,
        sizes: [],
        colors: [],
        scents: [],
        image: "image/serene-skin-soap.jpg"
    },
    {
        id: "LL-008",
        code: "LL-008",
        name: "Vitamin E Whitening Cream",
        category: "Body Care Products",
        price: 180,
        sizes: [],
        colors: [],
        scents: [],
        image: "image/vitamine-e-whitening-cream.jpg"
    },
    {
        id: "LL-009",
        code: "LL-009",
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        sizes: [],
        colors: ["Black", "Green", "Red", "Blue"],
        scents: [],
        image: "image/mini-enzo.jpg"
    },
    {
        id: "LL-010",
        code: "LL-010",
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        sizes: [],
        colors: ["Dark Blue", "Grayish Blue", "Blue", "Blue Stripes"],
        scents: [],
        image: "image/mini-bucket-bag.jpg"
    },
    {
        id: "LL-011",
        code: "LL-011",
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        sizes: [],
        colors: ["Black", "Tan Taupe", "Tan Taupe Two", "White", "Clay Two"],
        scents: [],
        image: "image/anytime-medium.jpg"
    },
    {
        id: "LL-012",
        code: "LL-012",
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        sizes: [],
        colors: ["Dark Brown", "Red", "Green", "Black"],
        scents: [],
        image: "image/emilio-barrel.jpg"
    },
    {
        id: "LL-013",
        code: "LL-013",
        name: "Victoria's Secret Perfume",
        category: "Perfumes",
        price: 700,
        sizes: [],
        colors: [],
        scents: [
            "Bare Vanilla",
            "Aqua Kiss",
            "Vanilla Lace",
            "Midnight Bloom",
            "Love Spell",
            "Pure Seduction",
            "Velvet Petals"
        ],
        image: "image/victorias-secret-perfume.jpg"
    },
    {
        id: "LL-014",
        code: "LL-014",
        name: "Bath & Body Works Perfume",
        category: "Perfumes",
        price: 600,
        sizes: [],
        colors: [],
        scents: [
            "Pure Wonder",
            "Hello Beautiful",
            "A Thousand Wishes",
            "You're The One",
            "Vanilla Ease"
        ],
        image: "image/bath-body-works-perfume.jpg"
    },
    {
        id: "LL-015",
        code: "LL-015",
        name: "Smart Collection Perfume",
        category: "Perfumes",
        price: 350,
        sizes: [],
        colors: [],
        scents: ["Chanel N'5"],
        image: "image/smart-collection-perfume.jpg"
    },
    {
        id: "LL-016",
        code: "LL-016",
        name: "Lattafa YARA",
        category: "Perfumes",
        price: 390,
        sizes: [],
        colors: [],
        scents: ["Lattafa YARA"],
        image: "image/lattafa-yara.jpg"
    }
];

let archivedProducts = [];
let auditRecords = [];
let inventory = [];
let restockRecords = [];

let editingIndex = -1;

const DEFAULT_THRESHOLD = 5;

const SIZE_OPTIONS = [
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
];

const CLOTHING_COLOR_OPTIONS = [
    "Black",
    "White",
    "Black and White Polka",
    "Light Blue",
    "Gray",
    "Pink",
    "Brown",
    "Tan"
];

const INITIAL_STOCK_VALUES = [
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
];

const productImage = document.getElementById("productImage");
const imagePreview = document.getElementById("imagePreview");
const uploadText = document.getElementById("uploadText");
const category = document.getElementById("category");
const colorGroup = document.getElementById("colorGroup");
const sizeGroup = document.getElementById("sizeGroup");

let scentGroup = document.getElementById("scentGroup");

if (!scentGroup && colorGroup) {
    scentGroup = document.createElement("div");
    scentGroup.id = "scentGroup";
    scentGroup.className = "field";

    colorGroup.parentNode.insertBefore(
        scentGroup,
        colorGroup.nextSibling
    );
}

function addToArray(array, value) {
    array[array.length] = value;
}

function removeFromArray(array, index) {
    if (index < 0 || index >= array.length) {
        return;
    }

    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }

    array.length = array.length - 1;
}

function addToFront(array, value) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }

    array[0] = value;
}

function containsValue(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }

    return false;
}

function manualTrim(text) {
    text = String(text || "");

    let start = 0;
    let end = text.length - 1;

    while (
        start < text.length &&
        (
            text[start] === " " ||
            text[start] === "\n" ||
            text[start] === "\t" ||
            text[start] === "\r"
        )
    ) {
        start++;
    }

    while (
        end >= start &&
        (
            text[end] === " " ||
            text[end] === "\n" ||
            text[end] === "\t" ||
            text[end] === "\r"
        )
    ) {
        end--;
    }

    let result = "";

    for (let i = start; i <= end; i++) {
        result += text[i];
    }

    return result;
}

function convertToLowerCase(text) {
    let result = "";

    text = String(text || "");

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

function convertToUpperCase(text) {
    let result = "";

    text = String(text || "");

    for (let i = 0; i < text.length; i++) {
        let character = text[i];
        let code = character.charCodeAt(0);

        if (code >= 97 && code <= 122) {
            character = String.fromCharCode(code - 32);
        }

        result += character;
    }

    return result;
}

function firstLetterUpper(text) {
    text = String(text || "");

    if (text.length === 0) {
        return "";
    }

    let first = text[0];
    let code = first.charCodeAt(0);

    if (code >= 97 && code <= 122) {
        first = String.fromCharCode(code - 32);
    }

    let result = first;

    for (let i = 1; i < text.length; i++) {
        result += text[i];
    }

    return result;
}

function getProductInitials(text) {
    text = String(text || "");

    let initials = "";
    let takeNext = true;

    for (let i = 0; i < text.length; i++) {
        const character = text[i];

        if (
            character === " " ||
            character === "-" ||
            character === "_"
        ) {
            takeNext = true;
        } else if (takeNext) {
            initials += character;
            takeNext = false;

            if (initials.length === 3) {
                break;
            }
        }
    }

    return initials;
}

function searchText(text, search) {
    text = convertToLowerCase(text);
    search = convertToLowerCase(search);

    if (search === "") {
        return true;
    }

    if (search.length > text.length) {
        return false;
    }

    for (let i = 0; i <= text.length - search.length; i++) {
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

function manualDatePart(value) {
    if (value < 10) {
        return "0" + value;
    }

    return String(value);
}

function getDateTime() {
    const now = new Date();

    let month = now.getMonth() + 1;
    let day = now.getDate();
    let year = now.getFullYear();

    let hour = now.getHours();
    let minute = now.getMinutes();

    let suffix = "AM";

    if (hour >= 12) {
        suffix = "PM";
    }

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }

    return (
        manualDatePart(month) +
        "/" +
        manualDatePart(day) +
        "/" +
        year +
        " " +
        manualDatePart(hour) +
        ":" +
        manualDatePart(minute) +
        " " +
        suffix
    );
}

function escapeHTML(value) {
    const div = document.createElement("div");

    div.textContent =
        value === null || value === undefined
            ? ""
            : String(value);

    return div.innerHTML;
}

function createCheckboxList(
    values,
    groupName,
    selectedValues
) {
    let html = `<div class="variant-options">`;

    for (let i = 0; i < values.length; i++) {
        let checked = "";

        if (containsValue(selectedValues, values[i])) {
            checked = "checked";
        }

        html += `
            <label class="variant-option">
                <input
                    type="checkbox"
                    name="${groupName}"
                    value="${escapeHTML(values[i])}"
                    ${checked}
                >
                <span>${escapeHTML(values[i])}</span>
            </label>
        `;
    }

    html += `</div>`;

    return html;
}

function getCheckedValues(name) {
    const checked =
        document.querySelectorAll(
            `input[name="${name}"]:checked`
        );

    const values = [];

    for (let i = 0; i < checked.length; i++) {
        addToArray(
            values,
            checked[i].value
        );
    }

    return values;
}

function getVariantRule(
    categoryName,
    productName
) {
    if (categoryName === "Bags") {
        return {
            sizes: false,
            colors: true,
            scents: false,
            fixedColor: false
        };
    }

    if (categoryName === "Perfumes") {
        return {
            sizes: false,
            colors: false,
            scents: true,
            fixedColor: false
        };
    }

    if (categoryName === "Body Care Products") {
        return {
            sizes: false,
            colors: false,
            scents: false,
            fixedColor: false
        };
    }

    const lowerName =
        convertToLowerCase(productName);

    if (
        categoryName === "Clothing" &&
        searchText(
            lowerName,
            "basic chic01 terno"
        )
    ) {
        return {
            sizes: true,
            colors: false,
            scents: false,
            fixedColor: true
        };
    }

    if (
        categoryName === "Clothing" &&
        searchText(
            lowerName,
            "sami t-shirt"
        )
    ) {
        return {
            sizes: false,
            colors: true,
            scents: false,
            fixedColor: false
        };
    }

    if (categoryName === "Clothing") {
        return {
            sizes: true,
            colors: true,
            scents: false,
            fixedColor: false
        };
    }

    return {
        sizes: false,
        colors: false,
        scents: false,
        fixedColor: false
    };
}

function updateVariantFields(
    preserveCurrent = false
) {
    if (!category || !sizeGroup || !colorGroup) {
        return;
    }

    const selectedCategory =
        category.value;

    const nameInput =
        document.getElementById(
            "productName"
        );

    const productName =
        nameInput
            ? manualTrim(nameInput.value)
            : "";

    let currentSizes = [];
    let currentColors = [];
    let currentScents = [];

    if (preserveCurrent) {
        currentSizes =
            getCheckedValues(
                "productSize"
            );

        currentColors =
            getCheckedValues(
                "productColor"
            );

        currentScents =
            getCheckedValues(
                "productScent"
            );

        const customColor =
            document.getElementById(
                "customColor"
            );

        if (
            customColor &&
            manualTrim(customColor.value) !== ""
        ) {
            addToArray(
                currentColors,
                manualTrim(customColor.value)
            );
        }
    } else if (
        editingIndex >= 0 &&
        products[editingIndex]
    ) {
        currentSizes =
            products[editingIndex].sizes || [];

        currentColors =
            products[editingIndex].colors || [];

        currentScents =
            products[editingIndex].scents || [];
    }

    const rule =
        getVariantRule(
            selectedCategory,
            productName
        );

    sizeGroup.innerHTML = "";
    colorGroup.innerHTML = "";

    if (scentGroup) {
        scentGroup.innerHTML = "";
        scentGroup.style.display = "none";
    }

    if (rule.sizes) {
        sizeGroup.style.display = "block";

        sizeGroup.innerHTML = `
            <label>Size</label>
            ${createCheckboxList(
                SIZE_OPTIONS,
                "productSize",
                currentSizes
            )}
        `;
    } else {
        sizeGroup.style.display = "none";
    }

    if (rule.colors) {
        colorGroup.style.display = "block";

        colorGroup.innerHTML = `
            <label>Color</label>
            ${createCheckboxList(
                CLOTHING_COLOR_OPTIONS,
                "productColor",
                currentColors
            )}

            <input
                type="text"
                id="customColor"
                placeholder="Add another color"
            >
        `;

        const customColor =
            document.getElementById(
                "customColor"
            );

        let customValues = [];

        for (
            let i = 0;
            i < currentColors.length;
            i++
        ) {
            if (
                !containsValue(
                    CLOTHING_COLOR_OPTIONS,
                    currentColors[i]
                )
            ) {
                addToArray(
                    customValues,
                    currentColors[i]
                );
            }
        }

        if (
            customColor &&
            customValues.length > 0
        ) {
            let customText = "";

            for (
                let i = 0;
                i < customValues.length;
                i++
            ) {
                if (i > 0) {
                    customText += ", ";
                }

                customText +=
                    customValues[i];
            }

            customColor.value =
                customText;
        }
    } else if (rule.fixedColor) {
        colorGroup.style.display = "block";

        colorGroup.innerHTML = `
            <label>Color</label>
            <div class="variant-note">
                Fixed Color
            </div>
        `;
    } else {
        colorGroup.style.display = "none";
    }

    if (rule.scents && scentGroup) {
        scentGroup.style.display = "block";

        const scentOptions = [
            "Bare Vanilla",
            "Aqua Kiss",
            "Vanilla Lace",
            "Midnight Bloom",
            "Love Spell",
            "Pure Seduction",
            "Velvet Petals",
            "Pure Wonder",
            "Hello Beautiful",
            "A Thousand Wishes",
            "You're The One",
            "Vanilla Ease",
            "Chanel N'5",
            "Lattafa YARA"
        ];

        scentGroup.innerHTML = `
            <label>Scent</label>
            ${createCheckboxList(
                scentOptions,
                "productScent",
                currentScents
            )}

            <input
                type="text"
                id="customScent"
                placeholder="Add another scent"
            >
        `;

        const customScent =
            document.getElementById(
                "customScent"
            );

        let customScents = [];

        for (
            let i = 0;
            i < currentScents.length;
            i++
        ) {
            if (
                !containsValue(
                    scentOptions,
                    currentScents[i]
                )
            ) {
                addToArray(
                    customScents,
                    currentScents[i]
                );
            }
        }

        if (
            customScent &&
            customScents.length > 0
        ) {
            let customText = "";

            for (
                let i = 0;
                i < customScents.length;
                i++
            ) {
                if (i > 0) {
                    customText += ", ";
                }

                customText +=
                    customScents[i];
            }

            customScent.value =
                customText;
        }
    }
}

function parseCommaValues(value) {
    if (!value) {
        return [];
    }

    const result = [];
    let current = "";

    for (let i = 0; i <= value.length; i++) {
        if (
            i === value.length ||
            value[i] === ","
        ) {
            const cleaned =
                manualTrim(current);

            if (
                cleaned !== "" &&
                !containsValue(
                    result,
                    cleaned
                )
            ) {
                addToArray(
                    result,
                    cleaned
                );
            }

            current = "";
        } else {
            current += value[i];
        }
    }

    return result;
}

function getProductVariantValues() {
    const selectedCategory =
        category.value;

    let sizes = [];
    let colors = [];
    let scents = [];

    const productNameInput =
        document.getElementById(
            "productName"
        );

    const productName =
        productNameInput
            ? manualTrim(
                productNameInput.value
            )
            : "";

    const rule =
        getVariantRule(
            selectedCategory,
            productName
        );

    if (rule.sizes) {
        sizes =
            getCheckedValues(
                "productSize"
            );
    }

    if (rule.colors) {
        colors =
            getCheckedValues(
                "productColor"
            );

        const customColor =
            document.getElementById(
                "customColor"
            );

        if (customColor) {
            const customColors =
                parseCommaValues(
                    customColor.value
                );

            for (
                let i = 0;
                i < customColors.length;
                i++
            ) {
                if (
                    !containsValue(
                        colors,
                        customColors[i]
                    )
                ) {
                    addToArray(
                        colors,
                        customColors[i]
                    );
                }
            }
        }
    }

    if (rule.fixedColor) {
        colors = ["Fixed Color"];
    }

    if (rule.scents) {
        scents =
            getCheckedValues(
                "productScent"
            );

        const customScent =
            document.getElementById(
                "customScent"
            );

        if (customScent) {
            const customScents =
                parseCommaValues(
                    customScent.value
                );

            for (
                let i = 0;
                i < customScents.length;
                i++
            ) {
                if (
                    !containsValue(
                        scents,
                        customScents[i]
                    )
                ) {
                    addToArray(
                        scents,
                        customScents[i]
                    );
                }
            }
        }
    }

    return {
        sizes: sizes,
        colors: colors,
        scents: scents
    };
}

function getVariantList(product) {
    const variants = [];

    const sizes =
        product.sizes || [];

    const colors =
        product.colors || [];

    const scents =
        product.scents || [];

    if (
        colors.length > 0 &&
        sizes.length > 0
    ) {
        for (
            let i = 0;
            i < colors.length;
            i++
        ) {
            for (
                let j = 0;
                j < sizes.length;
                j++
            ) {
                addToArray(
                    variants,
                    {
                        type: "color-size",
                        color: colors[i],
                        size: sizes[j],
                        scent: ""
                    }
                );
            }
        }
    } else if (colors.length > 0) {
        for (
            let i = 0;
            i < colors.length;
            i++
        ) {
            addToArray(
                variants,
                {
                    type: "color",
                    color: colors[i],
                    size: "",
                    scent: ""
                }
            );
        }
    } else if (sizes.length > 0) {
        for (
            let i = 0;
            i < sizes.length;
            i++
        ) {
            addToArray(
                variants,
                {
                    type: "size",
                    color: "",
                    size: sizes[i],
                    scent: ""
                }
            );
        }
    } else if (scents.length > 0) {
        for (
            let i = 0;
            i < scents.length;
            i++
        ) {
            addToArray(
                variants,
                {
                    type: "scent",
                    color: "",
                    size: "",
                    scent: scents[i]
                }
            );
        }
    } else {
        addToArray(
            variants,
            {
                type: "product",
                color: "",
                size: "",
                scent: ""
            }
        );
    }

    return variants;
}

function getVariantKey(variant) {
    let key = "";

    key += variant.color || "";
    key += "|";
    key += variant.size || "";
    key += "|";
    key += variant.scent || "";

    return key;
}

function getInitialVariantStock(index) {
    return INITIAL_STOCK_VALUES[
        index % INITIAL_STOCK_VALUES.length
    ];
}

function findInventoryByProductId(productId) {
    for (
        let i = 0;
        i < inventory.length;
        i++
    ) {
        if (
            inventory[i].productId ===
            productId
        ) {
            return inventory[i];
        }
    }

    return null;
}

function findProductById(productId) {
    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        if (
            products[i].id ===
            productId
        ) {
            return products[i];
        }
    }

    return null;
}

function findVariantByKey(
    variants,
    key
) {
    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        if (
            getVariantKey(
                variants[i]
            ) === key
        ) {
            return variants[i];
        }
    }

    return null;
}

function createInventoryRecord(
    product,
    productIndex
) {
    const existing =
        findInventoryByProductId(
            product.id
        );

    if (existing) {
        return existing;
    }

    const variants =
        getVariantList(product);

    const inventoryVariants = [];

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        addToArray(
            inventoryVariants,
            {
                id:
                    product.id +
                    "-V" +
                    (i + 1),

                key:
                    getVariantKey(
                        variants[i]
                    ),

                color:
                    variants[i].color || "",

                size:
                    variants[i].size || "",

                scent:
                    variants[i].scent || "",

                quantity:
                    getInitialVariantStock(
                        productIndex + i
                    ),

                threshold:
                    DEFAULT_THRESHOLD
            }
        );
    }

    const record = {
        id:
            Date.now() +
            Math.random(),

        productId:
            product.id,

        productCode:
            product.code,

        name:
            product.name,

        category:
            product.category,

        image:
            product.image,

        variants:
            inventoryVariants
    };

    addToArray(
        inventory,
        record
    );

    return record;
}

function getProductIndex(product) {
    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        if (
            products[i].id ===
            product.id
        ) {
            return i;
        }
    }

    return -1;
}

function updateInventoryProduct(product) {
    const item =
        findInventoryByProductId(
            product.id
        );

    if (!item) {
        createInventoryRecord(
            product,
            getProductIndex(product)
        );

        return;
    }

    item.productCode =
        product.code;

    item.name =
        product.name;

    item.category =
        product.category;

    item.image =
        product.image;

    const oldVariants =
        item.variants || [];

    const newVariants =
        getVariantList(product);

    const newInventoryVariants = [];

    for (
        let i = 0;
        i < newVariants.length;
        i++
    ) {
        const newVariant =
            newVariants[i];

        const oldVariant =
            findVariantByKey(
                oldVariants,
                getVariantKey(
                    newVariant
                )
            );

        let quantity =
            getInitialVariantStock(i);

        let threshold =
            DEFAULT_THRESHOLD;

        if (oldVariant) {
            quantity =
                Number(
                    oldVariant.quantity
                );

            if (
                oldVariant.threshold !==
                undefined
            ) {
                threshold =
                    Number(
                        oldVariant.threshold
                    );
            }
        }

        addToArray(
            newInventoryVariants,
            {
                id:
                    product.id +
                    "-V" +
                    (i + 1),

                key:
                    getVariantKey(
                        newVariant
                    ),

                color:
                    newVariant.color || "",

                size:
                    newVariant.size || "",

                scent:
                    newVariant.scent || "",

                quantity:
                    quantity,

                threshold:
                    threshold
            }
        );
    }

    item.variants =
        newInventoryVariants;

    checkAutomaticRestock();
}

function getInventoryRecord(
    productId
) {
    return findInventoryByProductId(
        productId
    );
}

function getTotalStock(item) {
    let total = 0;

    const variants =
        item.variants || [];

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        let value =
            Number(
                variants[i].quantity
            );

        if (value !== value) {
            value = 0;
        }

        total += value;
    }

    return total;
}

function getVariantLabel(variant) {
    let result = "";
    let count = 0;

    if (variant.color) {
        result += variant.color;
        count++;
    }

    if (variant.size) {
        if (count > 0) {
            result += " / ";
        }

        result += variant.size;
        count++;
    }

    if (variant.scent) {
        if (count > 0) {
            result += " / ";
        }

        result += variant.scent;
        count++;
    }

    if (count === 0) {
        return "General Stock";
    }

    return result;
}

function removeInventoryRecord(
    productId
) {
    for (
        let i = inventory.length - 1;
        i >= 0;
        i--
    ) {
        if (
            inventory[i].productId ===
            productId
        ) {
            removeFromArray(
                inventory,
                i
            );
        }
    }

    for (
        let i = restockRecords.length - 1;
        i >= 0;
        i--
    ) {
        if (
            restockRecords[i].productId ===
            productId
        ) {
            removeFromArray(
                restockRecords,
                i
            );
        }
    }
}

function addAuditRecord(
    product,
    action,
    changes
) {
    addToFront(
        auditRecords,
        {
            date:
                getDateTime(),

            user:
                "Administrator",

            productCode:
                product.code,

            productName:
                product.name,

            action:
                action,

            changes:
                changes
        }
    );
}

function arraysAreEqual(
    oldArray,
    newArray
) {
    oldArray =
        oldArray || [];

    newArray =
        newArray || [];

    if (
        oldArray.length !==
        newArray.length
    ) {
        return false;
    }

    for (
        let i = 0;
        i < oldArray.length;
        i++
    ) {
        if (
            oldArray[i] !==
            newArray[i]
        ) {
            return false;
        }
    }

    return true;
}

function compareArrays(
    oldArray,
    newArray,
    label
) {
    if (
        !arraysAreEqual(
            oldArray,
            newArray
        )
    ) {
        return label + " updated";
    }

    return "";
}

function formatPrice(value) {
    let number =
        Number(value);

    if (number !== number) {
        number = 0;
    }

    let whole =
        Math.floor(number);

    let decimal =
        Math.round(
            (number - whole) * 100
        );

    if (decimal >= 100) {
        whole++;
        decimal = 0;
    }

    let wholeText =
        String(whole);

    let formattedWhole = "";

    let counter = 0;

    for (
        let i = wholeText.length - 1;
        i >= 0;
        i--
    ) {
        formattedWhole =
            wholeText[i] +
            formattedWhole;

        counter++;

        if (
            counter === 3 &&
            i > 0
        ) {
            formattedWhole =
                "," +
                formattedWhole;

            counter = 0;
        }
    }

    let decimalText =
        decimal < 10
            ? "0" + decimal
            : String(decimal);

    return (
        formattedWhole +
        "." +
        decimalText
    );
}

function getProductChanges(
    oldProduct,
    newProduct
) {
    const changes = [];

    if (
        oldProduct.code !==
        newProduct.code
    ) {
        addToArray(
            changes,
            "Code changed from " +
            oldProduct.code +
            " to " +
            newProduct.code
        );
    }

    if (
        oldProduct.name !==
        newProduct.name
    ) {
        addToArray(
            changes,
            "Name changed from " +
            oldProduct.name +
            " to " +
            newProduct.name
        );
    }

    if (
        oldProduct.category !==
        newProduct.category
    ) {
        addToArray(
            changes,
            "Category changed from " +
            oldProduct.category +
            " to " +
            newProduct.category
        );
    }

    if (
        Number(oldProduct.price) !==
        Number(newProduct.price)
    ) {
        addToArray(
            changes,
            "Price changed from ₱" +
            formatPrice(
                oldProduct.price
            ) +
            " to ₱" +
            formatPrice(
                newProduct.price
            )
        );
    }

    const sizeChange =
        compareArrays(
            oldProduct.sizes,
            newProduct.sizes,
            "Sizes"
        );

    const colorChange =
        compareArrays(
            oldProduct.colors,
            newProduct.colors,
            "Colors"
        );

    const scentChange =
        compareArrays(
            oldProduct.scents,
            newProduct.scents,
            "Scents"
        );

    if (sizeChange) {
        addToArray(
            changes,
            sizeChange
        );
    }

    if (colorChange) {
        addToArray(
            changes,
            colorChange
        );
    }

    if (scentChange) {
        addToArray(
            changes,
            scentChange
        );
    }

    if (
        oldProduct.image !==
        newProduct.image
    ) {
        addToArray(
            changes,
            "Product image updated"
        );
    }

    if (changes.length === 0) {
        return "Product information updated";
    }

    let result = "";

    for (
        let i = 0;
        i < changes.length;
        i++
    ) {
        if (i > 0) {
            result += " • ";
        }

        result += changes[i];
    }

    return result;
}

function addProduct() {
    const file =
        productImage
            ? productImage.files[0]
            : null;

    if (
        !file &&
        editingIndex === -1
    ) {
        alert(
            "Please upload a product image."
        );

        return;
    }

    const selectedCategory =
        category.value;

    const codeInput =
        document.getElementById(
            "productCode"
        );

    const nameInput =
        document.getElementById(
            "productName"
        );

    const priceInput =
        document.getElementById(
            "price"
        );

    const code =
        manualTrim(
            codeInput.value
        );

    const name =
        manualTrim(
            nameInput.value
        );

    const priceValue =
        priceInput.value;

    if (
        !code ||
        !name ||
        !selectedCategory ||
        priceValue === ""
    ) {
        alert(
            "Please complete the required product information."
        );

        return;
    }

    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        if (
            i !== editingIndex &&
            convertToLowerCase(
                products[i].code
            ) ===
            convertToLowerCase(code)
        ) {
            alert(
                "Product code already exists."
            );

            return;
        }
    }

    const variantValues =
        getProductVariantValues();

    const rule =
        getVariantRule(
            selectedCategory,
            name
        );

    if (
        rule.sizes &&
        variantValues.sizes.length === 0
    ) {
        alert(
            "Please select at least one size."
        );

        return;
    }

    if (
        rule.colors &&
        variantValues.colors.length === 0
    ) {
        alert(
            "Please select at least one color."
        );

        return;
    }

    if (
        rule.scents &&
        variantValues.scents.length === 0
    ) {
        alert(
            "Please select at least one scent."
        );

        return;
    }

    let productId;

    if (editingIndex === -1) {
        productId = code;
    } else {
        productId =
            products[editingIndex].id;
    }

    let imageValue = "";

    if (file) {
        imageValue =
            URL.createObjectURL(file);
    } else {
        imageValue =
            products[editingIndex].image;
    }

    const product = {
        id:
            productId,

        image:
            imageValue,

        code:
            code,

        name:
            name,

        category:
            selectedCategory,

        price:
            Number(priceValue),

        sizes:
            variantValues.sizes,

        colors:
            variantValues.colors,

        scents:
            variantValues.scents
    };

    if (editingIndex === -1) {
        addToArray(
            products,
            product
        );

        createInventoryRecord(
            product,
            products.length - 1
        );

        addAuditRecord(
            product,
            "Added",
            "Product added with automatic inventory setup"
        );
    } else {
        const oldProduct =
            products[editingIndex];

        const changes =
            getProductChanges(
                oldProduct,
                product
            );

        products[editingIndex] =
            product;

        updateInventoryProduct(
            product
        );

        addAuditRecord(
            product,
            "Updated",
            changes
        );

        editingIndex = -1;

        const button =
            document.getElementById(
                "addProductButton"
            );

        if (button) {
            button.textContent =
                "Add Product";
        }
    }

    displayProducts();
    updateAudit();
    displayArchivedProducts();
    renderInventory();
    clearForm();
}

function displayProducts() {
    const container =
        document.getElementById(
            "productContainer"
        );

    if (!container) {
        return;
    }

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const filterCategory =
        document.getElementById(
            "filterCategory"
        );

    const search =
        searchInput
            ? convertToLowerCase(
                searchInput.value
            )
            : "";

    const selectedCategory =
        filterCategory
            ? filterCategory.value
            : "";

    container.innerHTML = "";

    let foundProducts = 0;

    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        const product =
            products[i];

        let searchableVariants = "";

        const sizes =
            product.sizes || [];

        const colors =
            product.colors || [];

        const scents =
            product.scents || [];

        for (
            let j = 0;
            j < sizes.length;
            j++
        ) {
            searchableVariants +=
                sizes[j] + " ";
        }

        for (
            let j = 0;
            j < colors.length;
            j++
        ) {
            searchableVariants +=
                colors[j] + " ";
        }

        for (
            let j = 0;
            j < scents.length;
            j++
        ) {
            searchableVariants +=
                scents[j] + " ";
        }

        const matchesSearch =
            searchText(
                product.name,
                search
            ) ||
            searchText(
                product.code,
                search
            ) ||
            searchText(
                searchableVariants,
                search
            );

        const matchesCategory =
            selectedCategory === "" ||
            product.category ===
                selectedCategory;

        if (
            !matchesSearch ||
            !matchesCategory
        ) {
            continue;
        }

        foundProducts++;

        let details = "";

        if (
            product.sizes &&
            product.sizes.length > 0
        ) {
            let sizeText = "";

            for (
                let j = 0;
                j < product.sizes.length;
                j++
            ) {
                if (j > 0) {
                    sizeText += ", ";
                }

                sizeText +=
                    product.sizes[j];
            }

            details +=
                "<strong>Size:</strong> " +
                escapeHTML(sizeText);
        }

        if (
            product.colors &&
            product.colors.length > 0
        ) {
            if (details !== "") {
                details += " · ";
            }

            let colorText = "";

            for (
                let j = 0;
                j < product.colors.length;
                j++
            ) {
                if (j > 0) {
                    colorText += ", ";
                }

                colorText +=
                    product.colors[j];
            }

            details +=
                "<strong>Color:</strong> " +
                escapeHTML(colorText);
        }

        if (
            product.scents &&
            product.scents.length > 0
        ) {
            if (details !== "") {
                details += " · ";
            }

            let scentText = "";

            for (
                let j = 0;
                j < product.scents.length;
                j++
            ) {
                if (j > 0) {
                    scentText += ", ";
                }

                scentText +=
                    product.scents[j];
            }

            details +=
                "<strong>Scent:</strong> " +
                escapeHTML(scentText);
        }

        let detailsHTML = "";

        if (details !== "") {
            detailsHTML = `
                <p class="product-details">
                    ${details}
                </p>
            `;
        }

        container.innerHTML += `
            <div class="product-card">

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                >

                <div class="product-info">

                    <span class="product-code">
                        ${escapeHTML(product.code)}
                    </span>

                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>

                    <span class="category">
                        ${escapeHTML(product.category)}
                    </span>

                    ${detailsHTML}

                    <div class="product-bottom">

                        <span class="price">
                            ₱${formatPrice(product.price)}
                        </span>

                        <div class="actions">

                            <button
                                onclick="editProduct(${i})">
                                Edit
                            </button>

                            <button
                                onclick="deleteProduct(${i})">
                                Delete
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        `;
    }

    if (foundProducts === 0) {
        container.innerHTML = `
            <div class="empty">
                No products found.
            </div>
        `;
    }
}

function cloneInventoryVariants(
    variants
) {
    const result = [];

    if (!variants) {
        return result;
    }

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        result[i] = {
            id:
                variants[i].id,

            key:
                variants[i].key,

            color:
                variants[i].color,

            size:
                variants[i].size,

            scent:
                variants[i].scent,

            quantity:
                Number(
                    variants[i].quantity
                ),

            threshold:
                variants[i].threshold !==
                undefined
                    ? Number(
                        variants[i].threshold
                    )
                    : DEFAULT_THRESHOLD
        };
    }

    return result;
}

function cloneProductArray(
    source
) {
    const result = [];

    if (!source) {
        return result;
    }

    for (
        let i = 0;
        i < source.length;
        i++
    ) {
        result[i] = source[i];
    }

    return result;
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

    const inventoryItem =
        getInventoryRecord(
            product.id
        );

    const archivedProduct = {
        id:
            product.id,

        image:
            product.image,

        code:
            product.code,

        name:
            product.name,

        category:
            product.category,

        price:
            product.price,

        sizes:
            cloneProductArray(
                product.sizes
            ),

        colors:
            cloneProductArray(
                product.colors
            ),

        scents:
            cloneProductArray(
                product.scents
            ),

        inventoryVariants:
            inventoryItem
                ? cloneInventoryVariants(
                    inventoryItem.variants
                )
                : [],

        dateArchived:
            getDateTime()
    };

    removeFromArray(
        products,
        index
    );

    addToFront(
        archivedProducts,
        archivedProduct
    );

    removeInventoryRecord(
        product.id
    );

    addAuditRecord(
        product,
        "Deleted",
        "Product deleted and moved to Product Archive"
    );

    displayProducts();
    displayArchivedProducts();
    updateAudit();
    renderInventory();
}

function editProduct(index) {
    const product =
        products[index];

    if (!product) {
        return;
    }

    editingIndex =
        index;

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

    updateVariantFields();

    if (productImage) {
        productImage.value = "";
    }

    imagePreview.src =
        product.image;

    imagePreview.style.display =
        "block";

    if (uploadText) {
        uploadText.style.display =
            "none";
    }

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
    const productCode =
        document.getElementById(
            "productCode"
        );

    const productName =
        document.getElementById(
            "productName"
        );

    const price =
        document.getElementById(
            "price"
        );

    if (productCode) {
        productCode.value = "";
    }

    if (productName) {
        productName.value = "";
    }

    if (category) {
        category.value = "";
    }

    if (price) {
        price.value = "";
    }

    editingIndex = -1;

    if (sizeGroup) {
        sizeGroup.innerHTML = "";
        sizeGroup.style.display =
            "none";
    }

    if (colorGroup) {
        colorGroup.innerHTML = "";
        colorGroup.style.display =
            "none";
    }

    if (scentGroup) {
        scentGroup.innerHTML = "";
        scentGroup.style.display =
            "none";
    }

    if (productImage) {
        productImage.value = "";
    }

    if (imagePreview) {
        imagePreview.src = "";
        imagePreview.style.display =
            "none";
    }

    if (uploadText) {
        uploadText.style.display =
            "block";
    }

    const button =
        document.getElementById(
            "addProductButton"
        );

    if (button) {
        button.textContent =
            "Add Product";
    }
}

function displayAudit() {
    const table =
        document.getElementById(
            "auditTable"
        );

    if (!table) {
        return;
    }

    const searchInput =
        document.getElementById(
            "auditSearchInput"
        );

    const actionFilter =
        document.getElementById(
            "actionFilter"
        );

    const search =
        searchInput
            ? convertToLowerCase(
                searchInput.value
            )
            : "";

    const filter =
        actionFilter
            ? actionFilter.value
            : "";

    table.innerHTML = "";

    let filteredCount = 0;

    for (
        let i = 0;
        i < auditRecords.length;
        i++
    ) {
        const audit =
            auditRecords[i];

        const matchesSearch =
            searchText(
                audit.productCode,
                search
            ) ||
            searchText(
                audit.productName,
                search
            ) ||
            searchText(
                audit.changes,
                search
            );

        const matchesFilter =
            filter === "" ||
            audit.action === filter;

        if (
            !matchesSearch ||
            !matchesFilter
        ) {
            continue;
        }

        filteredCount++;

        let actionClass = "";

        if (audit.action === "Added") {
            actionClass =
                "action-added";
        } else if (
            audit.action === "Updated"
        ) {
            actionClass =
                "action-updated";
        } else if (
            audit.action === "Deleted"
        ) {
            actionClass =
                "action-deleted";
        } else if (
            audit.action === "Restored"
        ) {
            actionClass =
                "action-restored";
        }

        table.innerHTML += `
            <tr>

                <td>
                    ${escapeHTML(audit.date)}
                </td>

                <td>
                    ${escapeHTML(audit.user)}
                </td>

                <td>
                    ${escapeHTML(audit.productCode)}
                </td>

                <td>
                    ${escapeHTML(audit.productName)}
                </td>

                <td>
                    <span
                        class="action-badge ${actionClass}">
                        ${escapeHTML(audit.action)}
                    </span>
                </td>

                <td>
                    ${escapeHTML(audit.changes)}
                </td>

            </tr>
        `;
    }

    const recordCount =
        document.getElementById(
            "recordCount"
        );

    if (recordCount) {
        recordCount.textContent =
            filteredCount +
            (
                filteredCount === 1
                    ? " Record"
                    : " Records"
            );
    }

    const emptyMessage =
        document.getElementById(
            "emptyMessage"
        );

    if (emptyMessage) {
        emptyMessage.style.display =
            filteredCount === 0
                ? "block"
                : "none";
    }
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
            auditRecords[i].action ===
            "Added"
        ) {
            added++;
        } else if (
            auditRecords[i].action ===
            "Updated"
        ) {
            updated++;
        } else if (
            auditRecords[i].action ===
            "Deleted"
        ) {
            deleted++;
        }
    }

    const totalActivities =
        document.getElementById(
            "totalActivities"
        );

    const addedCount =
        document.getElementById(
            "addedCount"
        );

    const updatedCount =
        document.getElementById(
            "updatedCount"
        );

    const deletedCount =
        document.getElementById(
            "deletedCount"
        );

    if (totalActivities) {
        totalActivities.textContent =
            auditRecords.length;
    }

    if (addedCount) {
        addedCount.textContent =
            added;
    }

    if (updatedCount) {
        updatedCount.textContent =
            updated;
    }

    if (deletedCount) {
        deletedCount.textContent =
            deleted;
    }

    displayAudit();
}

function displayArchivedProducts() {
    const container =
        document.getElementById(
            "archiveContainer"
        );

    if (!container) {
        return;
    }

    const searchInput =
        document.getElementById(
            "archiveSearchInput"
        );

    const categoryFilter =
        document.getElementById(
            "archiveFilterCategory"
        );

    const search =
        searchInput
            ? convertToLowerCase(
                searchInput.value
            )
            : "";

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "";

    container.innerHTML = "";

    let filteredCount = 0;

    for (
        let i = 0;
        i < archivedProducts.length;
        i++
    ) {
        const product =
            archivedProducts[i];

        let searchableVariants = "";

        const sizes =
            product.sizes || [];

        const colors =
            product.colors || [];

        const scents =
            product.scents || [];

        for (
            let j = 0;
            j < sizes.length;
            j++
        ) {
            searchableVariants +=
                sizes[j] + " ";
        }

        for (
            let j = 0;
            j < colors.length;
            j++
        ) {
            searchableVariants +=
                colors[j] + " ";
        }

        for (
            let j = 0;
            j < scents.length;
            j++
        ) {
            searchableVariants +=
                scents[j] + " ";
        }

        const matchesSearch =
            searchText(
                product.name,
                search
            ) ||
            searchText(
                product.code,
                search
            ) ||
            searchText(
                searchableVariants,
                search
            );

        const matchesCategory =
            selectedCategory === "" ||
            product.category ===
                selectedCategory;

        if (
            !matchesSearch ||
            !matchesCategory
        ) {
            continue;
        }

        filteredCount++;

        let details =
            "Price: ₱" +
            formatPrice(
                product.price
            );

        if (
            product.sizes &&
            product.sizes.length > 0
        ) {
            let sizeText = "";

            for (
                let j = 0;
                j < product.sizes.length;
                j++
            ) {
                if (j > 0) {
                    sizeText += ", ";
                }

                sizeText +=
                    product.sizes[j];
            }

            details +=
                " · Size: " +
                sizeText;
        }

        if (
            product.colors &&
            product.colors.length > 0
        ) {
            let colorText = "";

            for (
                let j = 0;
                j < product.colors.length;
                j++
            ) {
                if (j > 0) {
                    colorText += ", ";
                }

                colorText +=
                    product.colors[j];
            }

            details +=
                " · Color: " +
                colorText;
        }

        if (
            product.scents &&
            product.scents.length > 0
        ) {
            let scentText = "";

            for (
                let j = 0;
                j < product.scents.length;
                j++
            ) {
                if (j > 0) {
                    scentText += ", ";
                }

                scentText +=
                    product.scents[j];
            }

            details +=
                " · Scent: " +
                scentText;
        }

        let imageHTML = "";

        if (product.image) {
            imageHTML = `
                <img
                    class="archive-image"
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                >
            `;
        } else {
            imageHTML = `
                <div class="archive-image-placeholder">
                    No Image
                </div>
            `;
        }

        container.innerHTML += `
            <div class="archive-card">

                ${imageHTML}

                <div class="archive-card-body">

                    <div class="archive-top">

                        <span class="archive-code">
                            ${escapeHTML(product.code)}
                        </span>

                        <span class="category">
                            ${escapeHTML(product.category)}
                        </span>

                    </div>

                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>

                    <p class="archive-details">
                        ${escapeHTML(details)}
                    </p>

                    <p class="archive-date">
                        Archived:
                        ${escapeHTML(product.dateArchived)}
                    </p>

                    <div class="archive-actions">

                        <button
                            class="restore-btn"
                            onclick="restoreArchivedProduct(${i})">
                            Restore
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteArchivedProduct(${i})">
                            Delete Permanently
                        </button>

                    </div>

                </div>

            </div>
        `;
    }

    const archiveCount =
        document.getElementById(
            "archiveRecordCount"
        );

    if (archiveCount) {
        archiveCount.textContent =
            filteredCount +
            (
                filteredCount === 1
                    ? " Record"
                    : " Records"
            );
    }

    if (filteredCount === 0) {
        container.innerHTML = `
            <div class="empty">
                No archived products found.
            </div>
        `;
    }
}

function restoreArchivedProduct(
    index
) {
    const product =
        archivedProducts[index];

    if (!product) {
        return;
    }

    let duplicate = null;

    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        if (
            products[i].id ===
            product.id
        ) {
            duplicate =
                products[i];

            break;
        }
    }

    if (duplicate) {
        alert(
            "This product already exists."
        );

        return;
    }

    const restoredProduct = {
        id:
            product.id,

        image:
            product.image,

        code:
            product.code,

        name:
            product.name,

        category:
            product.category,

        price:
            product.price,

        sizes:
            cloneProductArray(
                product.sizes
            ),

        colors:
            cloneProductArray(
                product.colors
            ),

        scents:
            cloneProductArray(
                product.scents
            )
    };

    addToArray(
        products,
        restoredProduct
    );

    const restoredVariants =
        cloneInventoryVariants(
            product.inventoryVariants
        );

    if (
        restoredVariants &&
        restoredVariants.length > 0
    ) {
        const restoredInventoryVariants =
            [];

        for (
            let i = 0;
            i < restoredVariants.length;
            i++
        ) {
            const variant =
                restoredVariants[i];

            addToArray(
                restoredInventoryVariants,
                {
                    id:
                        restoredProduct.id +
                        "-V" +
                        (i + 1),

                    key:
                        variant.key ||
                        getVariantKey(
                            variant
                        ),

                    color:
                        variant.color || "",

                    size:
                        variant.size || "",

                    scent:
                        variant.scent || "",

                    quantity:
                        Number(
                            variant.quantity
                        ) || 0,

                    threshold:
                        variant.threshold !==
                        undefined
                            ? Number(
                                variant.threshold
                            )
                            : DEFAULT_THRESHOLD
                }
            );
        }

        addToArray(
            inventory,
            {
                id:
                    Date.now() +
                    Math.random(),

                productId:
                    restoredProduct.id,

                productCode:
                    restoredProduct.code,

                name:
                    restoredProduct.name,

                category:
                    restoredProduct.category,

                image:
                    restoredProduct.image,

                variants:
                    restoredInventoryVariants
            }
        );
    } else {
        createInventoryRecord(
            restoredProduct,
            products.length - 1
        );
    }

    addAuditRecord(
        restoredProduct,
        "Restored",
        "Product restored from Product Archive"
    );

    removeFromArray(
        archivedProducts,
        index
    );

    displayProducts();
    displayArchivedProducts();
    updateAudit();
    renderInventory();

    alert(
        `"${product.name}" has been restored.`
    );
}

function deleteArchivedProduct(
    index
) {
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

    removeFromArray(
        archivedProducts,
        index
    );

    displayArchivedProducts();
}

function getLowStockVariants(item) {
    const variants =
        item.variants || [];

    const lowVariants = [];

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        const quantity =
            Number(
                variants[i].quantity
            ) || 0;

        const threshold =
            variants[i].threshold !==
            undefined
                ? Number(
                    variants[i].threshold
                )
                : DEFAULT_THRESHOLD;

        if (
            quantity <= threshold
        ) {
            addToArray(
                lowVariants,
                variants[i]
            );
        }
    }

    return lowVariants;
}

function getStatus(item) {
    const variants =
        item.variants || [];

    if (variants.length === 0) {
        return "out";
    }

    let allOut = true;
    let hasLow = false;

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        const quantity =
            Number(
                variants[i].quantity
            ) || 0;

        const threshold =
            variants[i].threshold !==
            undefined
                ? Number(
                    variants[i].threshold
                )
                : DEFAULT_THRESHOLD;

        if (quantity > 0) {
            allOut = false;
        }

        if (
            quantity > 0 &&
            quantity <= threshold
        ) {
            hasLow = true;
        }

        if (quantity === 0) {
            hasLow = true;
        }
    }

    if (allOut) {
        return "out";
    }

    if (hasLow) {
        return "low";
    }

    return "available";
}

function getStatusText(status) {
    if (status === "out") {
        return "Out of Stock";
    }

    if (status === "low") {
        return "Low Stock";
    }

    return "In Stock";
}

function updateSummary() {
    const total =
        inventory.length;

    let available = 0;
    let low = 0;
    let out = 0;

    for (
        let i = 0;
        i < inventory.length;
        i++
    ) {
        const status =
            getStatus(
                inventory[i]
            );

        if (status === "available") {
            available++;
        } else if (
            status === "low"
        ) {
            low++;
        } else {
            out++;
        }
    }

    const totalProducts =
        document.getElementById(
            "totalProducts"
        );

    const inStock =
        document.getElementById(
            "inStock"
        );

    const lowStock =
        document.getElementById(
            "lowStock"
        );

    const outOfStock =
        document.getElementById(
            "outOfStock"
        );

    const inventoryCount =
        document.getElementById(
            "inventoryCount"
        );

    if (totalProducts) {
        totalProducts.textContent =
            total;
    }

    if (inStock) {
        inStock.textContent =
            available;
    }

    if (lowStock) {
        lowStock.textContent =
            low;
    }

    if (outOfStock) {
        outOfStock.textContent =
            out;
    }

    if (inventoryCount) {
        inventoryCount.textContent =
            total +
            (
                total === 1
                    ? " item"
                    : " items"
            );
    }
}

function findRestockRecord(
    productId,
    variantKey
) {
    for (
        let i = 0;
        i < restockRecords.length;
        i++
    ) {
        if (
            restockRecords[i].productId ===
                productId &&
            restockRecords[i].variantKey ===
                variantKey
        ) {
            return restockRecords[i];
        }
    }

    return null;
}

function createAutomaticRestock(
    item,
    variant
) {
    const variantKey =
        variant.key ||
        getVariantKey(variant);

    const existing =
        findRestockRecord(
            item.productId,
            variantKey
        );

    const currentQuantity =
        Number(
            variant.quantity
        ) || 0;

    const threshold =
        variant.threshold !==
        undefined
            ? Number(
                variant.threshold
            )
            : DEFAULT_THRESHOLD;

    let quantityToAdd =
        (threshold * 2) -
        currentQuantity;

    if (quantityToAdd < 1) {
        quantityToAdd = 1;
    }

    if (existing) {
        existing.currentQuantity =
            currentQuantity;

        existing.threshold =
            threshold;

        existing.quantity =
            quantityToAdd;

        return;
    }

    addToFront(
        restockRecords,
        {
            id:
                Date.now() +
                Math.random(),

            productId:
                item.productId,

            productCode:
                item.productCode,

            productName:
                item.name,

            variantKey:
                variantKey,

            variantLabel:
                getVariantLabel(
                    variant
                ),

            currentQuantity:
                currentQuantity,

            threshold:
                threshold,

            quantity:
                quantityToAdd,

            date:
                getDateTime(),

            status:
                "Automatic Restock"
        }
    );
}

function activeKeyExists(
    activeKeys,
    key
) {
    for (
        let i = 0;
        i < activeKeys.length;
        i++
    ) {
        if (
            activeKeys[i] ===
            key
        ) {
            return true;
        }
    }

    return false;
}

function checkAutomaticRestock() {
    const activeKeys = [];

    for (
        let i = 0;
        i < inventory.length;
        i++
    ) {
        const item =
            inventory[i];

        const variants =
            item.variants || [];

        for (
            let j = 0;
            j < variants.length;
            j++
        ) {
            const variant =
                variants[j];

            const quantity =
                Number(
                    variant.quantity
                ) || 0;

            const threshold =
                variant.threshold !==
                undefined
                    ? Number(
                        variant.threshold
                    )
                    : DEFAULT_THRESHOLD;

            const variantKey =
                variant.key ||
                getVariantKey(
                    variant
                );

            const key =
                item.productId +
                "|" +
                variantKey;

            if (
                quantity <= threshold
            ) {
                addToArray(
                    activeKeys,
                    key
                );

                createAutomaticRestock(
                    item,
                    variant
                );
            }
        }
    }

    for (
        let i = restockRecords.length - 1;
        i >= 0;
        i--
    ) {
        const record =
            restockRecords[i];

        const key =
            record.productId +
            "|" +
            record.variantKey;

        if (
            !activeKeyExists(
                activeKeys,
                key
            )
        ) {
            removeFromArray(
                restockRecords,
                i
            );
        }
    }
}

function renderInventory() {
    const inventoryBody =
        document.getElementById(
            "inventoryBody"
        );

    if (!inventoryBody) {
        return;
    }

    checkAutomaticRestock();

    const searchInput =
        document.getElementById(
            "inventorySearchInput"
        );

    const statusFilter =
        document.getElementById(
            "inventoryStatusFilter"
        );

    const search =
        searchInput
            ? convertToLowerCase(
                searchInput.value
            )
            : "";

    const selectedStatus =
        statusFilter
            ? statusFilter.value
            : "";

    inventoryBody.innerHTML = "";

    let filteredCount = 0;

    for (
        let i = 0;
        i < inventory.length;
        i++
    ) {
        const item =
            inventory[i];

        let variantSearch = "";

        const variants =
            item.variants || [];

        for (
            let j = 0;
            j < variants.length;
            j++
        ) {
            variantSearch +=
                getVariantLabel(
                    variants[j]
                ) +
                " ";
        }

        const matchesSearch =
            searchText(
                item.name,
                search
            ) ||
            searchText(
                item.productCode,
                search
            ) ||
            searchText(
                item.category,
                search
            ) ||
            searchText(
                variantSearch,
                search
            );

        const status =
            getStatus(item);

        const matchesStatus =
            selectedStatus === "" ||
            status === selectedStatus;

        if (
            !matchesSearch ||
            !matchesStatus
        ) {
            continue;
        }

        filteredCount++;

        const statusText =
            getStatusText(status);

        const totalStock =
            getTotalStock(item);

        const variantCount =
            variants.length;

        let variantPreview = "";

        let previewLimit =
            variantCount;

        if (previewLimit > 3) {
            previewLimit = 3;
        }

        for (
            let j = 0;
            j < previewLimit;
            j++
        ) {
            if (j > 0) {
                variantPreview +=
                    ", ";
            }

            variantPreview +=
                getVariantLabel(
                    variants[j]
                );
        }

        let extraVariants = "";

        if (variantCount > 3) {
            extraVariants =
                " + " +
                (variantCount - 3) +
                " more";
        }

        inventoryBody.innerHTML += `
            <tr>

                <td>

                    <div class="product-cell">

                       <div class="product-symbol">
                                ${escapeHTML(
                                getProductInitials(
                                    item.name
                                    )
                                )}
                        </div>

                        <div>

                            <span class="product-name">
                                ${escapeHTML(
                                    item.name
                                )}
                            </span>

                            <span class="product-sub">
                                ${escapeHTML(
                                    item.category
                                )}
                            </span>

                        </div>

                    </div>

                </td>

                <td>

                    <span class="code">
                        ${escapeHTML(
                            item.productCode
                        )}
                    </span>

                </td>

                <td>

                    <div class="inventory-variant-summary">

                        <strong>
                            ${variantCount}
                            ${
                                variantCount === 1
                                    ? "variant"
                                    : "variants"
                            }
                        </strong>

                        <br>

                        ${escapeHTML(
                            variantPreview
                        )}

                        ${escapeHTML(
                            extraVariants
                        )}

                    </div>

                </td>

                <td>

                    <span class="quantity">
                        ${totalStock}
                    </span>

                </td>

                <td>

                    <span class="badge ${status}">
                        ${statusText}
                    </span>

                </td>

                <td>

                    <button
                        class="stock-btn"
                        onclick="openStockModal('${escapeHTML(
                            String(item.id)
                        )}')">
                        View Stock
                    </button>

                </td>

            </tr>
        `;
    }

    if (filteredCount === 0) {
        inventoryBody.innerHTML = `
            <tr class="empty-row">

                <td colspan="6">

                    <div class="empty-state">

                        <div class="empty-icon">
                            ▦
                        </div>

                        <strong>
                            No inventory items found
                        </strong>

                        <span>
                            Try another product name, code, variant, or status.
                        </span>

                    </div>

                </td>

            </tr>
        `;
    }

    updateSummary();
    renderRestocking();
}

function renderRestocking() {
    const restockList =
        document.getElementById(
            "restockList"
        );

    const restockEmpty =
        document.getElementById(
            "restockEmpty"
        );

    if (!restockList) {
        return;
    }

    checkAutomaticRestock();

    if (
        restockRecords.length ===
        0
    ) {
        restockList.innerHTML = "";

        if (restockEmpty) {
            restockEmpty.style.display =
                "flex";

            restockList.appendChild(
                restockEmpty
            );
        }

        return;
    }

    if (restockEmpty) {
        restockEmpty.style.display =
            "none";
    }

    let cards = "";

    for (
        let i = 0;
        i < restockRecords.length;
        i++
    ) {
        const record =
            restockRecords[i];

        cards += `
            <div class="restock-card">

                <div class="restock-card-header">

                    <div class="restock-product">

                        <div class="restock-product-icon">
                                ${escapeHTML(
                                    getProductInitials(
                                    record.productName
                                    )
                                )}
                        </div>

                        <div class="restock-product-info">

                            <h3>
                                ${escapeHTML(
                                    record.productName
                                )}
                            </h3>

                            <div class="restock-product-meta">

                                <span>
                                    ${escapeHTML(
                                        record.productCode
                                    )}
                                </span>

                                <span class="restock-meta-divider">
                                    •
                                </span>

                                <span>
                                    ${escapeHTML(
                                        record.variantLabel
                                    )}
                                </span>

                            </div>

                        </div>

                    </div>

                    <div class="restock-trigger-badge">
                        <span class="restock-trigger-dot"></span>
                        Restock Triggered
                    </div>

                </div>

                <div class="restock-stats">

                    <div class="restock-stat">

                        <span class="restock-stat-label">
                            Current Stock
                        </span>

                        <strong>
                            ${record.currentQuantity}
                        </strong>

                        <span class="restock-stat-unit">
                            units remaining
                        </span>

                    </div>

                    <div class="restock-stat">

                        <span class="restock-stat-label">
                            Stock Threshold
                        </span>

                        <strong>
                            ${record.threshold}
                        </strong>

                        <span class="restock-stat-unit">
                            minimum units
                        </span>

                    </div>

                    <div class="restock-stat restock-stat-highlight">

                        <span class="restock-stat-label">
                            Suggested Restock
                        </span>

                        <strong>
                            ${record.quantity}
                        </strong>

                        <span class="restock-stat-unit">
                            units to add
                        </span>

                    </div>

                </div>

                <div class="restock-card-footer">

                    <div class="restock-notification">

                        <div class="restock-check">
                            ✓
                        </div>

                        <div>
                            <strong>
                                Supplier automatically notified
                            </strong>

                            <span>
                                Restocking was triggered because stock reached its threshold.
                            </span>
                        </div>

                    </div>

                    <div class="restock-date">

                        <span>
                            Triggered
                        </span>

                        <strong>
                            ${escapeHTML(
                                record.date
                            )}
                        </strong>

                    </div>

                </div>

            </div>
        `;
    }

    restockList.innerHTML =
        cards;
}

function openStockModal(id) {
    let item = null;

    for (
        let i = 0;
        i < inventory.length;
        i++
    ) {
        if (
            String(
                inventory[i].id
            ) ===
            String(id)
        ) {
            item =
                inventory[i];

            break;
        }
    }

    if (!item) {
        return;
    }

    const stockModal =
        document.getElementById(
            "stockModal"
        );

    const stockItemId =
        document.getElementById(
            "stockItemId"
        );

    const stockProductName =
        document.getElementById(
            "stockProductName"
        );

    const stockProductCode =
        document.getElementById(
            "stockProductCode"
        );

    const stockProductIcon =
        document.getElementById(
            "stockProductIcon"
        );

    const stockMessage =
        document.getElementById(
            "stockMessage"
        );

    if (stockItemId) {
        stockItemId.value =
            item.id;
    }

    if (stockProductName) {
        stockProductName.textContent =
            item.name;
    }

    if (stockProductCode) {
        stockProductCode.textContent =
            item.productCode;
    }

    if (stockProductIcon) {
        stockProductIcon.textContent =
        getProductInitials(
            item.name
        );
}



    if (stockMessage) {
        stockMessage.textContent =
            "";
    }

    const oldQuantityField =
        document.getElementById(
            "stockQuantity"
        );

    if (oldQuantityField) {
        const parent =
            oldQuantityField.closest(
                ".field"
            );

        if (parent) {
            parent.style.display =
                "none";
        }
    }

    const oldThresholdField =
        document.getElementById(
            "stockThreshold"
        );

    if (oldThresholdField) {
        const parent =
            oldThresholdField.closest(
                ".field"
            );

        if (parent) {
            parent.style.display =
                "none";
        }
    }

    let variantContainer =
        document.getElementById(
            "variantStockContainer"
        );

    if (!variantContainer) {
        variantContainer =
            document.createElement(
                "div"
            );

        variantContainer.id =
            "variantStockContainer";

        const stockForm =
            document.getElementById(
                "stockForm"
            );

        if (stockForm) {
            const formActions =
                stockForm.querySelector(
                    ".form-actions"
                );

            if (formActions) {
                stockForm.insertBefore(
                    variantContainer,
                    formActions
                );
            } else {
                stockForm.appendChild(
                    variantContainer
                );
            }
        }
    }

    const variants =
        item.variants || [];

    let variantHTML = `
        <div class="variant-stock-title">
            Stock by Variant
        </div>

        <div class="variant-stock-info">
            Each color, size, or scent is tracked separately.
            Automatic restocking is triggered when a variant
            reaches its threshold.
        </div>

        <div class="variant-stock-list">
    `;

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        const variant =
            variants[i];

        const quantity =
            Number(
                variant.quantity
            ) || 0;

        const threshold =
            variant.threshold !==
            undefined
                ? Number(
                    variant.threshold
                )
                : DEFAULT_THRESHOLD;

        let statusClass =
            "available";

        let statusText =
            "In Stock";

        if (quantity === 0) {
            statusClass = "out";
            statusText =
                "Out of Stock";
        } else if (
            quantity <= threshold
        ) {
            statusClass = "low";
            statusText =
                "Low Stock";
        }

        variantHTML += `
            <div class="variant-stock-row">

                <div class="variant-stock-name">
                    <strong>
                        ${escapeHTML(
                            getVariantLabel(
                                variant
                            )
                        )}
                    </strong>

                    <span class="variant-stock-status ${statusClass}">
                        ${statusText}
                    </span>
                </div>

                <div class="stock-input-group">
                    <label>
                        Stock
                    </label>

                    <input
                        type="number"
                        min="0"
                        value="${quantity}"
                        data-variant-index="${i}"
                        class="variant-stock-input"
                    >
                </div>

                <div class="stock-input-group">
                    <label>
                        Threshold
                    </label>

                    <input
                        type="number"
                        min="0"
                        value="${threshold}"
                        data-variant-index="${i}"
                        class="variant-threshold-input"
                    >
                </div>

            </div>
        `;
    }

    variantHTML += `
        </div>
    `;

    variantContainer.innerHTML =
        variantHTML;

    if (stockModal) {
        stockModal.classList.add(
            "show"
        );
    }
}

function closeStockModal() {
    const modal =
        document.getElementById(
            "stockModal"
        );

    if (modal) {
        modal.classList.remove(
            "show"
        );
    }
}

const stockForm =
    document.getElementById(
        "stockForm"
    );

if (stockForm) {
    stockForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const id =
                document.getElementById(
                    "stockItemId"
                ).value;

            const message =
                document.getElementById(
                    "stockMessage"
                );

            let item = null;

            for (
                let i = 0;
                i < inventory.length;
                i++
            ) {
                if (
                    String(
                        inventory[i].id
                    ) ===
                    String(id)
                ) {
                    item =
                        inventory[i];

                    break;
                }
            }

            if (!item) {
                return;
            }

            const quantityInputs =
                document.querySelectorAll(
                    ".variant-stock-input"
                );

            const thresholdInputs =
                document.querySelectorAll(
                    ".variant-threshold-input"
                );

            for (
                let i = 0;
                i < quantityInputs.length;
                i++
            ) {
                const quantity =
                    Number(
                        quantityInputs[i].value
                    );

                if (
                    quantity !== quantity ||
                    quantity < 0
                ) {
                    message.textContent =
                        "Stock quantity cannot be negative.";

                    return;
                }
            }

            for (
                let i = 0;
                i < thresholdInputs.length;
                i++
            ) {
                const threshold =
                    Number(
                        thresholdInputs[i].value
                    );

                if (
                    threshold !== threshold ||
                    threshold < 0
                ) {
                    message.textContent =
                        "Threshold cannot be negative.";

                    return;
                }
            }

            let changedCount = 0;

            for (
                let i = 0;
                i < quantityInputs.length;
                i++
            ) {
                const variantIndex =
                    Number(
                        quantityInputs[i]
                            .dataset
                            .variantIndex
                    );

                const quantity =
                    Number(
                        quantityInputs[i].value
                    );

                const threshold =
                    Number(
                        thresholdInputs[i].value
                    );

                const variant =
                    item.variants[
                        variantIndex
                    ];

                const oldQuantity =
                    Number(
                        variant.quantity
                    ) || 0;

                const oldThreshold =
                    variant.threshold !==
                    undefined
                        ? Number(
                            variant.threshold
                        )
                        : DEFAULT_THRESHOLD;

                const quantityChanged =
                    oldQuantity !==
                    quantity;

                const thresholdChanged =
                    oldThreshold !==
                    threshold;

                const row =
                    quantityInputs[i].closest(
                        ".variant-stock-row"
                    );

                const oldNote =
                    row
                        ? row.querySelector(
                            ".stock-change-note"
                        )
                        : null;

                if (oldNote) {
                    oldNote.remove();
                }

                if (
                    quantityChanged ||
                    thresholdChanged
                ) {
                    changedCount++;

                    if (row) {
                        row.classList.add(
                            "stock-row-changed"
                        );

                        let changeHTML =
                            `<div class="stock-change-note">`;

                        if (
                            quantityChanged
                        ) {
                            changeHTML += `
                                <span>
                                    ✓ Stock updated:
                                    ${oldQuantity} → ${quantity}
                                </span>
                            `;
                        }

                        if (
                            thresholdChanged
                        ) {
                            changeHTML += `
                                <span>
                                    ✓ Threshold updated:
                                    ${oldThreshold} → ${threshold}
                                </span>
                            `;
                        }

                        changeHTML +=
                            `</div>`;

                        row.insertAdjacentHTML(
                            "beforeend",
                            changeHTML
                        );
                    }
                } else if (row) {
                    row.classList.remove(
                        "stock-row-changed"
                    );
                }

                variant.quantity =
                    quantity;

                variant.threshold =
                    threshold;
            }

            if (changedCount > 0) {
                message.innerHTML =
                    "✓ Stock changes saved successfully.";

                message.classList.add(
                    "stock-save-success"
                );

                const saveButton =
                    stockForm.querySelector(
                        ".modal-save-btn"
                    );

                if (saveButton) {
                    saveButton.textContent =
                        "Done";

                    saveButton.type =
                        "button";

                    saveButton.onclick =
                        function () {
                            closeStockModal();

                            saveButton.type =
                                "submit";

                            saveButton.textContent =
                                "Save Changes";

                            saveButton.onclick =
                                null;
                        };
                }
            } else {
                message.textContent =
                    "No stock changes were made.";

                message.classList.remove(
                    "stock-save-success"
                );
            }

            checkAutomaticRestock();
            renderInventory();
            renderRestocking();
        }
    );
}

const stockModal =
    document.getElementById(
        "stockModal"
    );

if (stockModal) {
    stockModal.addEventListener(
        "click",
        function (event) {
            if (
                event.target ===
                stockModal
            ) {
                closeStockModal();
            }
        }
    );
}

function showProductPage(
    page,
    event
) {
    if (event) {
        event.preventDefault();
    }

    const pages = [
        "productsPage",
        "auditPage",
        "archivePage",
        "inventoryPage"
    ];

    for (
        let i = 0;
        i < pages.length;
        i++
    ) {
        const pageElement =
            document.getElementById(
                pages[i]
            );

        if (pageElement) {
            pageElement.style.display =
                "none";
        }
    }

    let selectedPageId =
        "inventoryPage";

    if (page === "products") {
        selectedPageId =
            "productsPage";
    } else if (
        page === "audit"
    ) {
        selectedPageId =
            "auditPage";
    } else if (
        page === "archive"
    ) {
        selectedPageId =
            "archivePage";
    }

    const selectedPage =
        document.getElementById(
            selectedPageId
        );

    if (selectedPage) {
        selectedPage.style.display =
            "block";
    }

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

const inventoryNav =
    document.getElementById(
        "inventoryNav"
    );

const productManagementNav =
    document.getElementById(
        "productManagementNav"
    );

const productMenu =
    document.getElementById(
        "productMenu"
    );

const productToggle =
    document.getElementById(
        "productToggle"
    );

if (inventoryNav) {
    inventoryNav.classList.toggle(
        "active",
        page === "inventory"
    );
}

if (productManagementNav) {
    productManagementNav.classList.toggle(
        "active",
        page !== "inventory"
    );
}

if (page === "inventory") {
    if (productMenu) {
        productMenu.style.display =
            "none";
    }

    if (productToggle) {
        productToggle.textContent =
            "+";
    }
}

    if (page === "audit") {
        updateAudit();
    }

    if (page === "archive") {
        displayArchivedProducts();
    }

    if (page === "inventory") {
        renderInventory();
    }

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    const overlay =
        document.querySelector(
            ".sidebar-overlay"
        );

    if (sidebar) {
        sidebar.classList.remove(
            "mobile-open"
        );
    }

    if (overlay) {
        overlay.classList.remove(
            "active"
        );
    }
}

function toggleProductMenu(
    event
) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const menu =
        document.getElementById(
            "productMenu"
        );

    const arrow =
        document.getElementById(
            "productToggle"
        );

    if (!menu) {
        return;
    }

    if (
        menu.style.display ===
        "none"
    ) {
        menu.style.display =
            "block";

        if (arrow) {
            arrow.textContent =
                "−";
        }
    } else {
        menu.style.display =
            "none";

        if (arrow) {
            arrow.textContent =
                "+";
        }
    }
}

function toggleMobileSidebar() {
    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    const overlay =
        document.querySelector(
            ".sidebar-overlay"
        );

    if (sidebar) {
        sidebar.classList.toggle(
            "mobile-open"
        );
    }

    if (overlay) {
        overlay.classList.toggle(
            "active"
        );
    }
}

const searchInput =
    document.getElementById(
        "searchInput"
    );

if (searchInput) {
    searchInput.addEventListener(
        "input",
        displayProducts
    );
}

const filterCategory =
    document.getElementById(
        "filterCategory"
    );

if (filterCategory) {
    filterCategory.addEventListener(
        "change",
        displayProducts
    );
}

const auditSearchInput =
    document.getElementById(
        "auditSearchInput"
    );

if (auditSearchInput) {
    auditSearchInput.addEventListener(
        "input",
        displayAudit
    );
}

const actionFilter =
    document.getElementById(
        "actionFilter"
    );

if (actionFilter) {
    actionFilter.addEventListener(
        "change",
        displayAudit
    );
}

const archiveSearchInput =
    document.getElementById(
        "archiveSearchInput"
    );

if (archiveSearchInput) {
    archiveSearchInput.addEventListener(
        "input",
        displayArchivedProducts
    );
}

const archiveFilterCategory =
    document.getElementById(
        "archiveFilterCategory"
    );

if (archiveFilterCategory) {
    archiveFilterCategory.addEventListener(
        "change",
        displayArchivedProducts
    );
}

const inventorySearchInput =
    document.getElementById(
        "inventorySearchInput"
    );

if (inventorySearchInput) {
    inventorySearchInput.addEventListener(
        "input",
        renderInventory
    );
}

const inventoryStatusFilter =
    document.getElementById(
        "inventoryStatusFilter"
    );

if (inventoryStatusFilter) {
    inventoryStatusFilter.addEventListener(
        "change",
        renderInventory
    );
}

const productForm =
    document.getElementById(
        "productForm"
    );

if (productForm) {
    productForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();
            addProduct();
        }
    );
}

if (productImage) {
    productImage.addEventListener(
        "change",
        function () {
            const file =
                productImage.files[0];

            if (file) {
                imagePreview.src =
                    URL.createObjectURL(
                        file
                    );

                imagePreview.style.display =
                    "block";

                if (uploadText) {
                    uploadText.style.display =
                        "none";
                }
            }
        }
    );
}

if (category) {
    category.addEventListener(
        "change",
        function () {
            updateVariantFields();
        }
    );
}

const productNameInput =
    document.getElementById(
        "productName"
    );

if (productNameInput) {
    productNameInput.addEventListener(
        "input",
        function () {
            if (
                category.value ===
                "Clothing"
            ) {
                updateVariantFields(
                    true
                );
            }
        }
    );
}

for (
    let i = 0;
    i < products.length;
    i++
) {
    createInventoryRecord(
        products[i],
        i
    );
}

updateVariantFields();

displayProducts();
displayAudit();
displayArchivedProducts();
updateAudit();
renderInventory();