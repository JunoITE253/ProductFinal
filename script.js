let products = [
    {
        id: "LL-001",
        image: "image/sophia-skirt.jpg",
        code: "LL-001",
        name: "Sophia Skirt",
        category: "Clothing",
        price: 790,
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        colors: ["Black", "White Polka", "Light Blue", "Gray", "Black"],
        scents: []
    },
    {
        id: "LL-002",
        image: "image/nov-mardi-tshirt.jpg",
        code: "LL-002",
        name: "Nov-Mardi T-Shirt",
        category: "Clothing",
        price: 450,
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        colors: ["White", "Pink", "Black"],
        scents: []
    },
    {
        id: "LL-003",
        image: "image/basic-chic01-terno.jpg",
        code: "LL-003",
        name: "Basic Chic01 Terno",
        category: "Clothing",
        price: 950,
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        colors: ["Fixed Color"],
        scents: []
    },
    {
        id: "LL-004",
        image: "image/sami-tshirt.jpg",
        code: "LL-004",
        name: "Sami T-Shirt",
        category: "Clothing",
        price: 790,
        sizes: [],
        colors: ["Brown", "Tan", "Pink", "Black", "Light Blue"],
        scents: []
    },
    {
        id: "LL-005",
        image: "image/alada-soap.jpg",
        code: "LL-005",
        name: "Alada Soap",
        category: "Body Care Products",
        price: 350,
        sizes: [],
        colors: [],
        scents: []
    },
    {
        id: "LL-006",
        image: "image/dewy-gluta-soap.jpg",
        code: "LL-006",
        name: "Dewy Gluta Soap",
        category: "Body Care Products",
        price: 199,
        sizes: [],
        colors: [],
        scents: []
    },
    {
        id: "LL-007",
        image: "image/serene-skin-soap.jpg",
        code: "LL-007",
        name: "Serene Skin Soap",
        category: "Body Care Products",
        price: 299,
        sizes: [],
        colors: [],
        scents: []
    },
    {
        id: "LL-008",
        image: "image/vitamine-e-whitening-cream.jpg",
        code: "LL-008",
        name: "Vitamin E Whitening Cream",
        category: "Body Care Products",
        price: 180,
        sizes: [],
        colors: [],
        scents: []
    },
    {
        id: "LL-009",
        image: "image/mini-enzo.jpg",
        code: "LL-009",
        name: "Mini Enzo",
        category: "Bags",
        price: 3590,
        sizes: [],
        colors: ["Black", "Green", "Red", "Blue"],
        scents: []
    },
    {
        id: "LL-010",
        image: "image/mini-bucket-bag.jpg",
        code: "LL-010",
        name: "Mini Bucket Bag",
        category: "Bags",
        price: 2090,
        sizes: [],
        colors: ["Dark Blue", "Grayish Blue", "Blue", "Blue Stripes"],
        scents: []
    },
    {
        id: "LL-011",
        image: "image/anytime-medium.jpg",
        code: "LL-011",
        name: "Anytime Medium",
        category: "Bags",
        price: 2890,
        sizes: [],
        colors: ["Black", "Tan Taupe", "Tan Taupe Two", "White", "Clay Two"],
        scents: []
    },
    {
        id: "LL-012",
        image: "image/emilio-barrel.jpg",
        code: "LL-012",
        name: "Emilio Barrel",
        category: "Bags",
        price: 3590,
        sizes: [],
        colors: ["Dark Brown", "Red", "Green", "Black"],
        scents: []
    },
    {
        id: "LL-013",
        image: "image/victorias-secret-perfume.jpg",
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
        ]
    },
    {
        id: "LL-014",
        image: "image/bath-body-works-perfume.jpg",
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
        ]
    },
    {
        id: "LL-015",
        image: "image/smart-collection-perfume.jpg",
        code: "LL-015",
        name: "Smart Collection Perfume",
        category: "Perfumes",
        price: 350,
        sizes: [],
        colors: [],
        scents: ["Chanel N'5"]
    },
    {
        id: "LL-016",
        image: "image/lattafa-yara.jpg",
        code: "LL-016",
        name: "Lattafa YARA",
        category: "Perfumes",
        price: 390,
        sizes: [],
        colors: [],
        scents: ["Lattafa YARA"]
    }
];

let archivedProducts = [];
let auditRecords = [];
let inventory = [];
let restockRecords = [];

let editingIndex = -1;

// Colors and scents typed in by hand. These are never remembered: they are
// wiped every time the form is cleared, saved or the category changes.
let manualColors = [];
let manualScents = [];

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

const productImage =
    document.getElementById("productImage");

const category =
    document.getElementById("category");

function addToArray(array, value) {
    array[array.length] = value;
}

function removeFromArray(array, index) {
    for (
        let i = index;
        i < array.length - 1;
        i++
    ) {
        array[i] = array[i + 1];
    }

    array.length =
        array.length - 1;
}

function addToFront(array, value) {
    for (
        let i = array.length;
        i > 0;
        i--
    ) {
        array[i] =
            array[i - 1];
    }

    array[0] = value;
}

function containsValue(array, value) {
    for (
        let i = 0;
        i < array.length;
        i++
    ) {
        if (array[i] === value) {
            return true;
        }
    }

    return false;
}

function manualTrim(text) {
    let start = 0;
    let end = text.length - 1;

    while (
        start <= end &&
        text[start] === " "
    ) {
        start++;
    }

    while (
        end >= start &&
        text[end] === " "
    ) {
        end--;
    }

    let result = "";

    for (
        let i = start;
        i <= end;
        i++
    ) {
        result += text[i];
    }

    return result;
}

function convertToLowerCase(text) {
    let result = "";

    text = String(text || "");

    for (
        let i = 0;
        i < text.length;
        i++
    ) {
        let character = text[i];
        let code =
            character.charCodeAt(0);

        if (
            code >= 65 &&
            code <= 90
        ) {
            character =
                String.fromCharCode(
                    code + 32
                );
        }

        result += character;
    }

    return result;
}

function convertToUpperCase(text) {
    let result = "";

    text = String(text || "");

    for (
        let i = 0;
        i < text.length;
        i++
    ) {
        let character = text[i];
        let code =
            character.charCodeAt(0);

        if (
            code >= 97 &&
            code <= 122
        ) {
            character =
                String.fromCharCode(
                    code - 32
                );
        }

        result += character;
    }

    return result;
}

function firstLetterUpper(text) {
    if (!text) {
        return "";
    }

    return (
        convertToUpperCase(
            text.charAt(0)
        ) +
        text.substring(1)
    );
}

function getProductInitials(name) {
    if (!name) {
        return "P";
    }

    let words = [];
    let current = "";

    for (
        let i = 0;
        i < name.length;
        i++
    ) {
        if (
            name[i] === " " &&
            current !== ""
        ) {
            addToArray(
                words,
                current
            );

            current = "";
        } else {
            current += name[i];
        }
    }

    if (current !== "") {
        addToArray(
            words,
            current
        );
    }

    if (words.length === 1) {
        return convertToUpperCase(
            words[0].charAt(0)
        );
    }

    let result = "";

    for (
        let i = 0;
        i < words.length &&
        result.length < 2;
        i++
    ) {
        result +=
            convertToUpperCase(
                words[i].charAt(0)
            );
    }

    return result;
}

function searchText(text, search) {
    text = convertToLowerCase(
        String(text || "")
    );

    search = convertToLowerCase(
        String(search || "")
    );

    if (search === "") {
        return true;
    }

    if (
        search.length >
        text.length
    ) {
        return false;
    }

    for (
        let i = 0;
        i <=
        text.length -
            search.length;
        i++
    ) {
        let match = true;

        for (
            let j = 0;
            j < search.length;
            j++
        ) {
            if (
                text[i + j] !==
                search[j]
            ) {
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

    return (
        manualDatePart(
            now.getMonth() + 1
        ) +
        "/" +
        manualDatePart(
            now.getDate()
        ) +
        "/" +
        now.getFullYear() +
        " " +
        now.toLocaleTimeString(
            "en-PH",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        )
    );
}

function getDateOnly() {
    const now = new Date();

    return (
        manualDatePart(
            now.getMonth() + 1
        ) +
        "/" +
        manualDatePart(
            now.getDate()
        ) +
        "/" +
        now.getFullYear()
    );
}

const RESTOCK_LEAD_DAYS = 7;
const MS_PER_DAY = 86400000;
const FAR_AWAY_DAYS = 365;

const MONTH_NAMES = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
];

function parseDateValue(dateValue) {
    if (!dateValue) {
        return null;
    }

    let firstSlash = -1;
    let secondSlash = -1;

    for (let i = 0; i < dateValue.length; i++) {
        if (dateValue[i] === "/") {
            if (firstSlash === -1) {
                firstSlash = i;
            } else {
                secondSlash = i;
                break;
            }
        }
    }

    if (firstSlash === -1 || secondSlash === -1) {
        return null;
    }

    const month = Number(dateValue.substring(0, firstSlash));
    const day = Number(dateValue.substring(firstSlash + 1, secondSlash));
    const year = Number(dateValue.substring(secondSlash + 1, secondSlash + 5));

    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        return null;
    }

    return new Date(year, month - 1, day);
}

function makeDateValue(date) {
    return (
        manualDatePart(date.getMonth() + 1) +
        "/" +
        manualDatePart(date.getDate()) +
        "/" +
        date.getFullYear()
    );
}

function addDaysToDateValue(dateValue, days) {
    const date = parseDateValue(dateValue);

    if (!date) {
        return "";
    }

    date.setDate(date.getDate() + days);

    return makeDateValue(date);
}

// Whole days from fromValue to toValue (negative if toValue is earlier).
function getDaysBetween(fromValue, toValue) {
    const from = parseDateValue(fromValue);
    const to = parseDateValue(toValue);

    if (!from || !to) {
        return 0;
    }

    let difference = to.getTime() - from.getTime();
    const negative = difference < 0;

    if (negative) {
        difference = 0 - difference;
    }

    // add half a day so a DST shift can never drop a day, then drop the remainder
    difference = difference + (MS_PER_DAY / 2);
    const days = (difference - (difference % MS_PER_DAY)) / MS_PER_DAY;

    return negative ? 0 - days : days;
}

function formatFriendlyDate(dateValue) {
    const date = parseDateValue(dateValue);

    if (!date) {
        return "";
    }

    return (
        MONTH_NAMES[date.getMonth()] +
        " " +
        date.getDate() +
        ", " +
        date.getFullYear()
    );
}

function describeDaysFromToday(dateValue) {
    const days = getDaysBetween(getDateOnly(), dateValue);

    if (days === 0) {
        return "today";
    }

    if (days === 1) {
        return "tomorrow";
    }

    if (days === -1) {
        return "yesterday";
    }

    if (days > 0) {
        return "in " + days + " days";
    }

    return (0 - days) + " days ago";
}

// Rounds a positive number up to a whole number without Math.ceil.
function roundUpWhole(value) {
    const remainder = value % 1;

    if (remainder > 0) {
        return value - remainder + 1;
    }

    return value;
}

function createRestockTracking(quantity) {
    return {
        baseDate: getDateOnly(),
        baseQty: Number(quantity) || 0,
        triggeredOn: ""
    };
}

function cloneRestockTracking(tracking, quantity) {
    if (!tracking || !tracking.baseDate) {
        return createRestockTracking(quantity);
    }

    return {
        baseDate: tracking.baseDate,
        baseQty: Number(tracking.baseQty) || 0,
        triggeredOn: tracking.triggeredOn || ""
    };
}

// Call when stock is increased. Starts a fresh usage baseline.
function recordVariantRestock(variant, newQuantity) {
    const today = getDateOnly();

    if (!variant.restockTracking) {
        variant.restockTracking = createRestockTracking(newQuantity);
    }

    const threshold =
        variant.threshold !== undefined
            ? Number(variant.threshold)
            : DEFAULT_THRESHOLD;

    variant.lastRestocked = today;
    variant.restockTracking.baseDate = today;
    variant.restockTracking.baseQty = newQuantity;

    // still at/below threshold after this delivery: a new order starts now
    variant.restockTracking.triggeredOn =
        newQuantity <= threshold ? today : "";
}

/*
   Works out the "possible next restock" for one variant.
   - At/below threshold: supplier delivery is expected
     RESTOCK_LEAD_DAYS after the day the restock was triggered.
   - Healthy stock: projects the day stock will reach the threshold from
     the average daily usage since the last restock, then adds the lead time.
   - No usage yet: no date is guessed.
*/
function refreshRestockDates(variant) {
    const quantity = Number(variant.quantity) || 0;

    const threshold =
        variant.threshold !== undefined
            ? Number(variant.threshold)
            : DEFAULT_THRESHOLD;

    if (!variant.restockTracking) {
        variant.restockTracking = createRestockTracking(quantity);
    }

    const tracking = variant.restockTracking;
    const today = getDateOnly();

    variant.nextRestock = "";
    variant.nextRestockType = "unknown";
    variant.nextRestockNote = "";

    if (quantity <= threshold) {
        if (!tracking.triggeredOn) {
            tracking.triggeredOn = today;
        }

        variant.nextRestock =
            addDaysToDateValue(tracking.triggeredOn, RESTOCK_LEAD_DAYS);

        variant.nextRestockType = "expected";

        const wait = getDaysBetween(today, variant.nextRestock);

        if (wait < 0) {
            variant.nextRestockNote =
                "Overdue by " + (0 - wait) +
                (wait === -1 ? " day" : " days") +
                " (ordered " + formatFriendlyDate(tracking.triggeredOn) + ")";
        } else {
            variant.nextRestockNote =
                "Delivery expected " + describeDaysFromToday(variant.nextRestock) +
                " (ordered " + formatFriendlyDate(tracking.triggeredOn) + ")";
        }

        return;
    }

    tracking.triggeredOn = "";

    const elapsed = getDaysBetween(tracking.baseDate, today);
    const used = tracking.baseQty - quantity;

    if (elapsed < 1 || used < 1) {
        variant.nextRestockNote = "Not enough usage yet to estimate";
        return;
    }

    const perDay = used / elapsed;
    const daysToThreshold = roundUpWhole((quantity - threshold) / perDay);

    if (daysToThreshold > FAR_AWAY_DAYS) {
        variant.nextRestockType = "far";
        variant.nextRestockNote = "Usage is very slow, no restock needed soon";
        return;
    }

    variant.nextRestock =
        addDaysToDateValue(today, daysToThreshold + RESTOCK_LEAD_DAYS);

    variant.nextRestockType = "projected";

    // one decimal place, no toFixed
    const tenths = (perDay * 10) + 0.5;
    const rounded = (tenths - (tenths % 1)) / 10;

    variant.nextRestockNote =
        "Projected from usage of about " + rounded + " per day";
}

// Copies the display fields of a variant onto its restock record.
function copyRestockDatesToRecord(record, variant) {
    record.lastRestocked = variant.lastRestocked || "";
    record.nextRestock = variant.nextRestock || "";
    record.nextRestockType = variant.nextRestockType || "unknown";
    record.nextRestockNote = variant.nextRestockNote || "";
    record.stockedSince =
        variant.restockTracking
            ? variant.restockTracking.baseDate
            : "";
}

function escapeHTML(text) {
    text = String(text || "");

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function createCheckboxList(
    containerId,
    options,
    selectedValues
) {
    const container =
        document.getElementById(
            containerId
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    for (
        let i = 0;
        i < options.length;
        i++
    ) {
        let checked = false;

        if (selectedValues) {
            for (
                let j = 0;
                j < selectedValues.length;
                j++
            ) {
                if (
                    selectedValues[j] ===
                    options[i]
                ) {
                    checked = true;
                    break;
                }
            }
        }

        container.innerHTML += `
            <label class="variant-option">
                <input
                    type="checkbox"
                    value="${escapeHTML(options[i])}"
                    ${checked ? "checked" : ""}
                >
                <span>${escapeHTML(options[i])}</span>
            </label>
        `;
    }
}

function getCheckedValues(
    containerId
) {
    const container =
        document.getElementById(
            containerId
        );

    const values = [];

    if (!container) {
        return values;
    }

    const inputs =
        container.querySelectorAll(
            "input[type='checkbox']"
        );

    for (
        let i = 0;
        i < inputs.length;
        i++
    ) {
        if (inputs[i].checked) {
            addToArray(
                values,
                inputs[i].value
            );
        }
    }

    return values;
}

function getVariantRule(
    selectedCategory
) {
    if (
        selectedCategory ===
        "Clothing"
    ) {
        return "clothing";
    }

    if (
        selectedCategory ===
        "Perfumes"
    ) {
        return "perfume";
    }

    if (
        selectedCategory ===
        "Body Care Products"
    ) {
        return "body";
    }

    if (
        selectedCategory ===
        "Bags"
    ) {
        return "bag";
    }

    return "";
}

function updateVariantFields(
    keepValues
) {
    const selectedCategory =
        category
            ? category.value
            : "";

    const sizeGroup =
        document.getElementById(
            "sizeGroup"
        );

    const colorGroupElement =
        document.getElementById(
            "colorGroup"
        );

    const scentGroup =
        document.getElementById(
            "scentGroup"
        );

    if (!sizeGroup ||
        !colorGroupElement ||
        !scentGroup
    ) {
        return;
    }

    if (
        selectedCategory ===
        "Clothing"
    ) {
        sizeGroup.style.display =
            "block";

        colorGroupElement.style.display =
            "block";

        scentGroup.style.display =
            "none";

        createCheckboxList(
            "sizeOptions",
            SIZE_OPTIONS,
            keepValues
                ? getCheckedValues(
                    "sizeOptions"
                )
                : []
        );

        createCheckboxList(
            "colorOptions",
            CLOTHING_COLOR_OPTIONS,
            keepValues
                ? getCheckedValues(
                    "colorOptions"
                )
                : []
        );

    } else if (
        selectedCategory ===
        "Bags"
    ) {
        sizeGroup.style.display =
            "none";

        colorGroupElement.style.display =
            "block";

        scentGroup.style.display =
            "none";

        createCheckboxList(
            "colorOptions",
            [
                "Black",
                "White",
                "Brown",
                "Tan",
                "Red",
                "Green",
                "Blue",
                "Dark Blue",
                "Grayish Blue",
                "Blue Stripes",
                "Tan Taupe",
                "Tan Taupe Two",
                "Clay Two",
                "Dark Brown"
            ],
            keepValues
                ? getCheckedValues(
                    "colorOptions"
                )
                : []
        );

        document.getElementById(
            "sizeOptions"
        ).innerHTML = "";

    } else if (
        selectedCategory ===
        "Perfumes"
    ) {
        sizeGroup.style.display =
            "none";

        colorGroupElement.style.display =
            "none";

        scentGroup.style.display =
            "block";

        document.getElementById(
            "sizeOptions"
        ).innerHTML = "";

        document.getElementById(
            "colorOptions"
        ).innerHTML = "";

    } else {
        sizeGroup.style.display =
            "none";

        colorGroupElement.style.display =
            "none";

        scentGroup.style.display =
            "none";

        document.getElementById(
            "sizeOptions"
        ).innerHTML = "";

        document.getElementById(
            "colorOptions"
        ).innerHTML = "";
    }

    // manual entries never carry over between products or categories
    if (!keepValues) {
        resetManualEntries();
    }

    const variantHint = document.getElementById("variantHint");

    if (variantHint) {
        variantHint.style.display =
            selectedCategory === "" ? "block" : "none";
    }
}

// Combines two lists into a new one, skipping repeats (ignores upper/lower case).
function joinUnique(first, second) {
    const result = [];

    for (let i = 0; i < first.length; i++) {
        addToArray(result, first[i]);
    }

    for (let i = 0; i < second.length; i++) {
        if (findIgnoreCase(result, second[i]) === -1) {
            addToArray(result, second[i]);
        }
    }

    return result;
}

function getManualList(type) {
    return type === "scent" ? manualScents : manualColors;
}

function getManualPrefix(type) {
    return type === "scent" ? "manualScent" : "manualColor";
}

function findIgnoreCase(list, value) {
    const wanted = convertToLowerCase(value);

    for (let i = 0; i < list.length; i++) {
        if (convertToLowerCase(list[i]) === wanted) {
            return i;
        }
    }

    return -1;
}

function renderManualChips(type) {
    const box = document.getElementById(getManualPrefix(type) + "Chips");
    const list = getManualList(type);

    if (!box) {
        return;
    }

    let html = "";

    for (let i = 0; i < list.length; i++) {
        html += `
            <span class="manual-chip">
                ${escapeHTML(list[i])}
                <button
                    type="button"
                    aria-label="Remove ${escapeHTML(list[i])}"
                    onclick="removeManualValue('${type}', ${i})">×</button>
            </span>
        `;
    }

    box.innerHTML = html;
}

function resetManualEntries() {
    manualColors = [];
    manualScents = [];

    const types = ["color", "scent"];

    for (let i = 0; i < types.length; i++) {
        const input = document.getElementById(getManualPrefix(types[i]));

        if (input) {
            input.value = "";
        }

        clearFieldError(getManualPrefix(types[i]));
        renderManualChips(types[i]);
    }
}

// Adds whatever is typed in the box (comma separated values are allowed).
// A color that matches one of the basic colors just ticks that box instead.
function addManualValue(type) {
    const prefix = getManualPrefix(type);
    const input = document.getElementById(prefix);

    if (!input) {
        return;
    }

    const values = parseCommaValues(input.value);
    const noun = type === "scent" ? "scent" : "color";

    if (values.length === 0) {
        setFieldError(prefix, "Type a " + noun + " first.");
        input.focus();
        return;
    }

    const list = getManualList(type);
    const skipped = [];

    for (let i = 0; i < values.length; i++) {
        const value = values[i];

        if (findIgnoreCase(list, value) !== -1) {
            addToArray(skipped, value);
            continue;
        }

        if (type === "color") {
            const boxes = document.querySelectorAll("#colorOptions input[type='checkbox']");
            let matched = null;

            for (let j = 0; j < boxes.length; j++) {
                if (convertToLowerCase(boxes[j].value) === convertToLowerCase(value)) {
                    matched = boxes[j];
                    break;
                }
            }

            if (matched) {
                if (matched.checked) {
                    addToArray(skipped, value);
                } else {
                    matched.checked = true;
                }

                continue;
            }
        }

        addToArray(list, value);
    }

    renderManualChips(type);

    if (skipped.length > 0) {
        let names = "";

        for (let i = 0; i < skipped.length; i++) {
            if (i > 0) {
                names += ", ";
            }

            names += skipped[i];
        }

        setFieldError(prefix, names + " is already added.");
        input.value = names;
    } else {
        input.value = "";
        clearFieldError(prefix);
    }

    input.focus();
}

function manualEntryKey(event, type) {
    if (event.key === "Enter") {
        event.preventDefault();
        addManualValue(type);
    }
}

function removeManualValue(type, index) {
    removeFromArray(getManualList(type), index);
    renderManualChips(type);
}

// Anything still typed but not added yet is added when the form is saved.
function addPendingManualValues() {
    const types = ["color", "scent"];

    for (let i = 0; i < types.length; i++) {
        const input = document.getElementById(getManualPrefix(types[i]));

        if (input && manualTrim(input.value) !== "") {
            addManualValue(types[i]);
        }
    }
}

function parseCommaValues(
    value
) {
    const result = [];
    let current = "";

    value = String(value || "");

    for (
        let i = 0;
        i < value.length;
        i++
    ) {
        if (
            value[i] === ","
        ) {
            current =
                manualTrim(
                    current
                );

            if (current !== "") {
                addToArray(
                    result,
                    current
                );
            }

            current = "";
        } else {
            current += value[i];
        }
    }

    current =
        manualTrim(current);

    if (current !== "") {
        addToArray(
            result,
            current
        );
    }

    return result;
}

function getProductVariantValues(
    product
) {
    let sizes =
        product.sizes || [];

    let colors =
        product.colors || [];

    let scents =
        product.scents || [];

    if (
        sizes.length === 0 &&
        colors.length === 0 &&
        scents.length === 0
    ) {
        return [
            {
                size: "",
                color: "",
                scent: ""
            }
        ];
    }

    const variants = [];

    if (
        sizes.length > 0 &&
        colors.length > 0
    ) {
        for (
            let i = 0;
            i < sizes.length;
            i++
        ) {
            for (
                let j = 0;
                j < colors.length;
                j++
            ) {
                addToArray(
                    variants,
                    {
                        size:
                            sizes[i],
                        color:
                            colors[j],
                        scent: ""
                    }
                );
            }
        }

        return variants;
    }

    if (sizes.length > 0) {
        for (
            let i = 0;
            i < sizes.length;
            i++
        ) {
            addToArray(
                variants,
                {
                    size:
                        sizes[i],
                    color: "",
                    scent: ""
                }
            );
        }

        return variants;
    }

    if (colors.length > 0) {
        for (
            let i = 0;
            i < colors.length;
            i++
        ) {
            addToArray(
                variants,
                {
                    size: "",
                    color:
                        colors[i],
                    scent: ""
                }
            );
        }

        return variants;
    }

    for (
        let i = 0;
        i < scents.length;
        i++
    ) {
        addToArray(
            variants,
            {
                size: "",
                color: "",
                scent:
                    scents[i]
            }
        );
    }

    return variants;
}

function getVariantList(
    product
) {
    return getProductVariantValues(
        product
    );
}

function getVariantKey(
    variant
) {
    return (
        (variant.color || "") +
        "|" +
        (variant.size || "") +
        "|" +
        (variant.scent || "")
    );
}

function getInitialVariantStock(
    productIndex
) {
    if (
        productIndex <
        INITIAL_STOCK_VALUES.length
    ) {
        return INITIAL_STOCK_VALUES[
            productIndex
        ];
    }

    return 10;
}

function findInventoryByProductId(
    productId
) {
    for (
        let i = 0;
        i < inventory.length;
        i++
    ) {
        if (
            String(
                inventory[i].productId
            ) ===
            String(productId)
        ) {
            return inventory[i];
        }
    }

    return null;
}

function findProductById(
    productId
) {
    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        if (
            String(
                products[i].id
            ) ===
            String(productId)
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
            variants[i].key === key
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
                    variants[i].color ||
                    "",

                size:
                    variants[i].size ||
                    "",

                scent:
                    variants[i].scent ||
                    "",

                quantity:
                    getInitialVariantStock(
                        productIndex + i
                    ),

                threshold:
                    DEFAULT_THRESHOLD,

                lastRestocked:
                    "",

                nextRestock:
                    "",

                nextRestockType:
                    "unknown",

                nextRestockNote:
                    "",

                restockTracking:
                    createRestockTracking(
                        getInitialVariantStock(
                            productIndex + i
                        )
                    )
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
        }
    );
}

function getProductIndex(
    productId
) {
    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        if (
            String(
                products[i].id
            ) ===
            String(productId)
        ) {
            return i;
        }
    }

    return -1;
}

function updateInventoryProduct(
    product
) {
    const item =
        findInventoryByProductId(
            product.id
        );

    if (!item) {
        const productIndex =
            getProductIndex(
                product.id
            );

        createInventoryRecord(
            product,
            productIndex < 0
                ? 0
                : productIndex
        );

        return;
    }

    const oldVariants =
        item.variants || [];

    const newVariants =
        getVariantList(product);

    const updatedVariants = [];

    for (
        let i = 0;
        i < newVariants.length;
        i++
    ) {
        const newVariant =
            newVariants[i];

        const key =
            getVariantKey(
                newVariant
            );

        const oldVariant =
            findVariantByKey(
                oldVariants,
                key
            );

        let quantity =
            getInitialVariantStock(
                i
            );

        let threshold =
            DEFAULT_THRESHOLD;

        let lastRestocked = "";
        let nextRestock = "";
        let restockTracking = null;

        if (oldVariant) {
            quantity =
                Number(
                    oldVariant.quantity
                ) || 0;

            threshold =
                oldVariant.threshold !==
                undefined
                    ? Number(
                        oldVariant.threshold
                    )
                    : DEFAULT_THRESHOLD;

            lastRestocked =
                oldVariant.lastRestocked ||
                "";

            nextRestock =
                oldVariant.nextRestock ||
                "";

            restockTracking =
                oldVariant.restockTracking ||
                null;
        }

        addToArray(
            updatedVariants,
            {
                id:
                    product.id +
                    "-V" +
                    (i + 1),

                key:
                    key,

                color:
                    newVariant.color ||
                    "",

                size:
                    newVariant.size ||
                    "",

                scent:
                    newVariant.scent ||
                    "",

                quantity:
                    quantity,

                threshold:
                    threshold,

                lastRestocked:
                    lastRestocked,

                nextRestock:
                    nextRestock,

                restockTracking:
                    cloneRestockTracking(
                        restockTracking,
                        quantity
                    )
            }
        );
    }

    item.productCode =
        product.code;

    item.name =
        product.name;

    item.category =
        product.category;

    item.image =
        product.image;

    item.variants =
        updatedVariants;
}

function getInventoryRecord(
    productId
) {
    return findInventoryByProductId(
        productId
    );
}

function getTotalStock(
    item
) {
    let total = 0;

    const variants =
        item.variants || [];

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        total +=
            Number(
                variants[i].quantity
            ) || 0;
    }

    return total;
}

function getVariantLabel(
    variant
) {
    let label = "";

    if (variant.color) {
        label +=
            variant.color;
    }

    if (variant.size) {
        if (label !== "") {
            label += " / ";
        }

        label +=
            "Size " +
            variant.size;
    }

    if (variant.scent) {
        if (label !== "") {
            label += " / ";
        }

        label +=
            variant.scent;
    }

    if (label === "") {
        return "Standard";
    }

    return label;
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
            String(
                inventory[i].productId
            ) ===
            String(productId)
        ) {
            removeFromArray(
                inventory,
                i
            );
        }
    }

    for (
        let i =
            restockRecords.length - 1;
        i >= 0;
        i--
    ) {
        if (
            String(
                restockRecords[i].productId
            ) ===
            String(productId)
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
    const record = {
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
    };

    addToFront(
        auditRecords,
        record
    );
}

function arraysAreEqual(
    first,
    second
) {
    if (
        first.length !==
        second.length
    ) {
        return false;
    }

    for (
        let i = 0;
        i < first.length;
        i++
    ) {
        if (
            first[i] !==
            second[i]
        ) {
            return false;
        }
    }

    return true;
}

function compareArrays(
    first,
    second
) {
    if (
        arraysAreEqual(
            first,
            second
        )
    ) {
        return true;
    }

    return false;
}

// Rounds to a whole number without Math.round.
function roundToWhole(value) {
    let number = Number(value) || 0;

    if (number < 0) {
        return 0;
    }

    number = number + 0.5;

    return number - (number % 1);
}

// 1250 -> "1,250" (whole pesos only)
function formatPrice(price) {
    const digits = String(roundToWhole(price));

    let result = "";
    let count = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (count > 0 && count % 3 === 0) {
            result = "," + result;
        }

        result = digits.charAt(i) + result;
        count++;
    }

    return result;
}

// Compares two lists and reports what was added and what was removed.
function getListChange(label, oldList, newList) {
    oldList = oldList || [];
    newList = newList || [];

    if (arraysAreEqual(oldList, newList)) {
        return null;
    }

    const added = [];
    const removed = [];

    for (let i = 0; i < newList.length; i++) {
        if (!containsValue(oldList, newList[i]) && !containsValue(added, newList[i])) {
            addToArray(added, newList[i]);
        }
    }

    for (let i = 0; i < oldList.length; i++) {
        if (!containsValue(newList, oldList[i]) && !containsValue(removed, oldList[i])) {
            addToArray(removed, oldList[i]);
        }
    }

    if (added.length === 0 && removed.length === 0) {
        return { label: label, text: "Order changed" };
    }

    return { label: label, added: added, removed: removed };
}

// Returns a list of change objects:
//   { label, from, to }            for single values
//   { label, added, removed }      for sizes / colors / scents
//   { label, text }                for anything else
function getProductChanges(oldProduct, newProduct) {
    const changes = [];

    if (oldProduct.code !== newProduct.code) {
        addToArray(changes, {
            label: "Code",
            from: oldProduct.code,
            to: newProduct.code
        });
    }

    if (oldProduct.name !== newProduct.name) {
        addToArray(changes, {
            label: "Name",
            from: oldProduct.name,
            to: newProduct.name
        });
    }

    if (oldProduct.category !== newProduct.category) {
        addToArray(changes, {
            label: "Category",
            from: oldProduct.category,
            to: newProduct.category
        });
    }

    if (Number(oldProduct.price) !== Number(newProduct.price)) {
        addToArray(changes, {
            label: "Price",
            from: "₱" + formatPrice(oldProduct.price),
            to: "₱" + formatPrice(newProduct.price)
        });
    }

    const listLabels = ["Sizes", "Colors", "Scents"];
    const oldLists = [oldProduct.sizes, oldProduct.colors, oldProduct.scents];
    const newLists = [newProduct.sizes, newProduct.colors, newProduct.scents];

    for (let i = 0; i < listLabels.length; i++) {
        const change = getListChange(listLabels[i], oldLists[i], newLists[i]);

        if (change) {
            addToArray(changes, change);
        }
    }

    const oldImages = getProductImages(oldProduct);
    const newImages = getProductImages(newProduct);

    if (!arraysAreEqual(oldImages, newImages)) {
        let text = "Photos changed";

        if (newImages.length > oldImages.length) {
            const added = newImages.length - oldImages.length;
            text = "Added " + added + (added === 1 ? " photo" : " photos") +
                   " (" + newImages.length + " total)";
        } else if (newImages.length < oldImages.length) {
            const removed = oldImages.length - newImages.length;
            text = "Removed " + removed + (removed === 1 ? " photo" : " photos") +
                   " (" + newImages.length + " total)";
        }

        addToArray(changes, { label: "Photos", text: text });
    }

    if (changes.length === 0) {
        return "Product information updated";
    }

    return changes;
}

const MAX_PRODUCT_IMAGES = 6;
const MAX_PRICE = 9999999;

let formImages = [];

function padNumber(value, size) {
    let text = String(value);

    while (text.length < size) {
        text = "0" + text;
    }

    return text;
}

// Next unused internal ID. Looks at active AND archived products so an ID
// is never reused after a delete.
function getNextProductId() {
    let highest = 0;

    const lists = [products, archivedProducts];

    for (let l = 0; l < lists.length; l++) {
        for (let i = 0; i < lists[l].length; i++) {
            const id = String(lists[l][i].id || "");

            let digits = "";

            for (let j = 0; j < id.length; j++) {
                const ch = id.charAt(j);

                if (ch >= "0" && ch <= "9") {
                    digits += ch;
                }
            }

            if (digits !== "" && Number(digits) > highest) {
                highest = Number(digits);
            }
        }
    }

    return "LL-" + padNumber(highest + 1, 3);
}

function getProductImages(product) {
    if (product.images && product.images.length > 0) {
        return product.images;
    }

    if (product.image) {
        return [product.image];
    }

    return [];
}

/* ---------- field errors ---------- */

function setFieldError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "Error");
    const zone = document.getElementById(fieldId + "Zone");

    if (input) {
        input.classList.add("invalid");
    }

    if (zone) {
        zone.classList.add("invalid");
    }

    if (error) {
        error.textContent = message;
        error.style.display = "block";
    }
}

function clearFieldError(fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "Error");
    const zone = document.getElementById(fieldId + "Zone");

    if (input) {
        input.classList.remove("invalid");
    }

    if (zone) {
        zone.classList.remove("invalid");
    }

    if (error) {
        error.textContent = "";
        error.style.display = "none";
    }
}

function clearAllFieldErrors() {
    const ids = [
        "productCode",
        "productName",
        "category",
        "price",
        "productImage",
        "manualColor",
        "manualScent"
    ];

    for (let i = 0; i < ids.length; i++) {
        clearFieldError(ids[i]);
    }
}

/* ---------- product code ---------- */

// Returns { product, archived } for a product already using this code.
function findProductByCode(code, ignoreId) {
    const wanted = convertToLowerCase(manualTrim(code));

    if (wanted === "") {
        return null;
    }

    for (let i = 0; i < products.length; i++) {
        if (ignoreId !== undefined && products[i].id === ignoreId) {
            continue;
        }

        if (convertToLowerCase(manualTrim(products[i].code)) === wanted) {
            return { product: products[i], archived: false };
        }
    }

    for (let i = 0; i < archivedProducts.length; i++) {
        if (convertToLowerCase(manualTrim(archivedProducts[i].code)) === wanted) {
            return { product: archivedProducts[i], archived: true };
        }
    }

    return null;
}

function getCodeError(code) {
    const trimmed = manualTrim(code);

    if (trimmed === "") {
        return "Product code is required.";
    }

    const editingId =
        editingIndex !== -1 && products[editingIndex]
            ? products[editingIndex].id
            : undefined;

    const found = findProductByCode(trimmed, editingId);

    if (!found) {
        return "";
    }

    if (found.archived) {
        return (
            "\"" + trimmed + "\" belongs to an archived product (" +
            found.product.name + "). Restore it or use a different code."
        );
    }

    return "\"" + trimmed + "\" is already used by " + found.product.name + ".";
}

// Live check while typing: only reports duplicates, not "required".
function checkProductCode() {
    const input = document.getElementById("productCode");

    if (!input) {
        return;
    }

    if (manualTrim(input.value) === "") {
        clearFieldError("productCode");
        return;
    }

    const message = getCodeError(input.value);

    if (message) {
        setFieldError("productCode", message);
    } else {
        clearFieldError("productCode");
    }
}

/* ---------- price (whole pesos only) ---------- */

// Only lets digits, "." and "," be typed. The "." is allowed on purpose so
// the person sees the "whole pesos only" message instead of digits being
// silently merged (12.50 must never become 1250).
function blockPriceKeys(event) {
    if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
    }

    if (event.key.length !== 1) {
        return;
    }

    const ch = event.key;

    const allowed =
        (ch >= "0" && ch <= "9") || ch === "." || ch === ",";

    if (!allowed) {
        event.preventDefault();
    }
}

// Removes thousands separators, spaces and the peso sign from typed/pasted text.
function stripPriceFormatting(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const ch = text.charAt(i);

        if (ch !== "," && ch !== " " && ch !== "₱") {
            result += ch;
        }
    }

    return result;
}

function priceHasOnlyDigits(text) {
    if (text === "") {
        return false;
    }

    for (let i = 0; i < text.length; i++) {
        const ch = text.charAt(i);

        if (ch < "0" || ch > "9") {
            return false;
        }
    }

    return true;
}

function getPriceProblem(text) {
    const clean = stripPriceFormatting(manualTrim(text));

    if (clean === "") {
        return "Price is required.";
    }

    for (let i = 0; i < clean.length; i++) {
        if (clean.charAt(i) === ".") {
            return "Whole pesos only. Remove the decimal point.";
        }
    }

    if (!priceHasOnlyDigits(clean)) {
        return "Enter the price using digits only.";
    }

    if (Number(clean) < 1) {
        return "Price must be at least ₱1.";
    }

    if (Number(clean) > MAX_PRICE) {
        return "Price cannot be more than ₱" + formatPrice(MAX_PRICE) + ".";
    }

    return "";
}

// Live handler. Never changes the digits the person typed; it only tidies
// separators and reports a problem as soon as one appears.
function sanitizePriceInput() {
    const input = document.getElementById("price");

    if (!input) {
        return;
    }

    const stripped = stripPriceFormatting(input.value);

    if (stripped !== input.value) {
        input.value = stripped;
    }

    if (stripped === "") {
        clearFieldError("price");
        return;
    }

    // do not complain about "0" while typing, only on submit
    let problem = getPriceProblem(stripped);

    if (problem === "Price must be at least ₱1.") {
        problem = "";
    }

    if (problem) {
        setFieldError("price", problem);
    } else {
        clearFieldError("price");
    }
}

// Returns the whole number, or -1 when the text is not a valid whole number.
function parseWholePrice(text) {
    const clean = stripPriceFormatting(manualTrim(text));

    if (!priceHasOnlyDigits(clean)) {
        return -1;
    }

    return Number(clean);
}

/* ---------- photos ---------- */

function renderImageGrid() {
    const grid = document.getElementById("imageGrid");
    const counter = document.getElementById("imageCounter");
    const zone = document.getElementById("productImageZone");
    const label = document.getElementById("uploadText");

    if (counter) {
        counter.textContent = formImages.length + " / " + MAX_PRODUCT_IMAGES;
    }

    if (label) {
        label.textContent =
            formImages.length === 0 ? "Add photos" : "Add more photos";
    }

    if (zone) {
        if (formImages.length >= MAX_PRODUCT_IMAGES) {
            zone.classList.add("full");
        } else {
            zone.classList.remove("full");
        }
    }

    if (!grid) {
        return;
    }

    let html = "";

    for (let i = 0; i < formImages.length; i++) {
        html += `
            <div class="img-thumb ${i === 0 ? "is-cover" : ""}">

                <img src="${escapeHTML(formImages[i])}" alt="Photo ${i + 1}">

                ${
                    i === 0
                        ? `<span class="img-cover-badge">Cover</span>`
                        : `<button type="button" class="img-make-cover" onclick="makeCoverImage(${i})">Make cover</button>`
                }

                <button
                    type="button"
                    class="img-remove"
                    aria-label="Remove photo ${i + 1}"
                    onclick="removeFormImage(${i})">×</button>

            </div>
        `;
    }

    grid.innerHTML = html;
}

function addFormImages(files) {
    let notImages = 0;
    let overLimit = 0;

    clearFieldError("productImage");

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.substring(0, 6) !== "image/") {
            notImages++;
            continue;
        }

        if (formImages.length >= MAX_PRODUCT_IMAGES) {
            overLimit++;
            continue;
        }

        addToArray(formImages, URL.createObjectURL(file));
    }

    renderImageGrid();

    if (overLimit > 0) {
        setFieldError(
            "productImage",
            "A product can have up to " + MAX_PRODUCT_IMAGES +
            " photos. " + overLimit + " not added."
        );
    } else if (notImages > 0) {
        setFieldError("productImage", "Only image files can be uploaded.");
    }
}

function removeFormImage(index) {
    removeFromArray(formImages, index);
    renderImageGrid();
}

function makeCoverImage(index) {
    const chosen = formImages[index];

    removeFromArray(formImages, index);
    addToFront(formImages, chosen);
    renderImageGrid();
}

/* ---------- validate + save ---------- */

// Shows every problem at once and returns the id of the first invalid field.
function validateProductForm() {
    clearAllFieldErrors();

    let firstInvalid = "";

    const codeValue = document.getElementById("productCode").value;
    const codeError = getCodeError(codeValue);

    if (codeError) {
        setFieldError("productCode", codeError);
        firstInvalid = "productCode";
    }

    if (manualTrim(document.getElementById("productName").value) === "") {
        setFieldError("productName", "Product name is required.");

        if (!firstInvalid) {
            firstInvalid = "productName";
        }
    }

    if (document.getElementById("category").value === "") {
        setFieldError("category", "Please select a category.");

        if (!firstInvalid) {
            firstInvalid = "category";
        }
    }

    const priceProblem = getPriceProblem(document.getElementById("price").value);

    if (priceProblem) {
        setFieldError("price", priceProblem);

        if (!firstInvalid) {
            firstInvalid = "price";
        }
    }

    if (formImages.length === 0) {
        setFieldError("productImage", "Add at least one product photo.");

        if (!firstInvalid) {
            firstInvalid = "productImage";
        }
    }

    return firstInvalid;
}

function addProduct() {
    addPendingManualValues();

    const firstInvalid = validateProductForm();

    if (firstInvalid) {
        const target =
            document.getElementById(
                firstInvalid === "productImage" ? "productImageZone" : firstInvalid
            );

        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });

            if (firstInvalid !== "productImage") {
                target.focus();
            }
        }

        return;
    }

    const selectedCategory = document.getElementById("category").value;
    const images = cloneProductArray(formImages);

    const product = {
        id:
            editingIndex === -1
                ? getNextProductId()
                : products[editingIndex].id,

        image: images[0],

        images: images,

        code: manualTrim(document.getElementById("productCode").value),

        name: manualTrim(document.getElementById("productName").value),

        category: selectedCategory,

        price: parseWholePrice(document.getElementById("price").value),

        sizes: getCheckedValues("sizeOptions"),

        colors:
            selectedCategory === "Perfumes" ||
            selectedCategory === "Body Care Products"
                ? []
                : joinUnique(getCheckedValues("colorOptions"), manualColors),

        scents:
            selectedCategory === "Perfumes"
                ? joinUnique([], manualScents)
                : []
    };

    if (editingIndex === -1) {
        addToArray(products, product);

        createInventoryRecord(product, products.length - 1);

        addAuditRecord(
            product,
            "Added",
            "Added to " + product.category + " at ₱" + formatPrice(product.price) +
            " with " + images.length + (images.length === 1 ? " photo" : " photos")
        );

    } else {
        const oldProduct = products[editingIndex];
        const changes = getProductChanges(oldProduct, product);

        products[editingIndex] = product;

        updateInventoryProduct(product);

        addAuditRecord(product, "Updated", changes);

        editingIndex = -1;

        document.getElementById("addProductButton").textContent = "Add Product";
    }

    displayProducts();
    updateAudit();
    renderInventory();
    clearForm();
}

// One row of small chips (sizes, colors or scents), capped so cards stay tidy.
function buildChipRow(label, list) {
    if (!list || list.length === 0) {
        return "";
    }

    const SHOW = 4;
    let chips = "";

    for (let i = 0; i < list.length && i < SHOW; i++) {
        chips += `<span class="chip">${escapeHTML(list[i])}</span>`;
    }

    if (list.length > SHOW) {
        let rest = "";

        for (let i = SHOW; i < list.length; i++) {
            if (i > SHOW) {
                rest += ", ";
            }

            rest += list[i];
        }

        chips += `<span class="chip more" title="${escapeHTML(rest)}">+${list.length - SHOW}</span>`;
    }

    return `
        <div class="chip-row">
            <span class="chip-label">${label}</span>
            ${chips}
        </div>
    `;
}

// Next/previous photo on a product card (no re-render).
function cycleProductImage(productIndex, step) {
    const product = products[productIndex];
    const media = document.getElementById("pcmedia-" + productIndex);
    const image = document.getElementById("pcimg-" + productIndex);
    const count = document.getElementById("pccount-" + productIndex);

    if (!product || !media || !image) {
        return;
    }

    const images = getProductImages(product);

    if (images.length < 2) {
        return;
    }

    let next = Number(media.dataset.index) + step;

    if (next < 0) {
        next = images.length - 1;
    }

    if (next >= images.length) {
        next = 0;
    }

    media.dataset.index = next;
    media.classList.remove("no-image");
    image.style.display = "";
    image.src = images[next];

    if (count) {
        count.textContent = (next + 1) + " / " + images.length;
    }
}

function displayProducts() {
    const container = document.getElementById("productContainer");

    if (!container) {
        return;
    }

    const searchInput = document.getElementById("searchInput");
    const selectedCategory = document.getElementById("filterCategory");

    const search = searchInput ? convertToLowerCase(searchInput.value) : "";
    const categoryFilter = selectedCategory ? selectedCategory.value : "";

    let cards = "";
    let foundProducts = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const sizes = product.sizes || [];
        const colors = product.colors || [];
        const scents = product.scents || [];

        let variantText = "";

        for (let j = 0; j < sizes.length; j++) {
            variantText += sizes[j] + " ";
        }

        for (let j = 0; j < colors.length; j++) {
            variantText += colors[j] + " ";
        }

        for (let j = 0; j < scents.length; j++) {
            variantText += scents[j] + " ";
        }

        const matchesSearch =
            searchText(product.name, search) ||
            searchText(product.code, search) ||
            searchText(variantText, search);

        const matchesCategory =
            categoryFilter === "" || product.category === categoryFilter;

        if (!matchesSearch || !matchesCategory) {
            continue;
        }

        foundProducts++;

        const images = getProductImages(product);

        const chips =
            buildChipRow("Sizes", sizes) +
            buildChipRow("Colors", colors) +
            buildChipRow("Scents", scents);

        cards += `
            <article class="pc-card">

                <div class="pc-media ${images.length === 0 ? "no-image" : ""}"
                     id="pcmedia-${i}"
                     data-index="0">

                    ${
                        images.length > 0
                            ? `<img
                                   id="pcimg-${i}"
                                   src="${escapeHTML(images[0])}"
                                   alt="${escapeHTML(product.name)}"
                                   onerror="showImageFallback(this)">`
                            : `<img id="pcimg-${i}" alt="" style="display:none">`
                    }

                    <span class="pc-initials">
                        ${escapeHTML(getProductInitials(product.name))}
                    </span>

                    <span class="pc-category">${escapeHTML(product.category)}</span>

                    ${
                        images.length > 1
                            ? `<button type="button" class="pc-nav prev" aria-label="Previous photo"
                                   onclick="cycleProductImage(${i}, -1)">‹</button>
                               <button type="button" class="pc-nav next" aria-label="Next photo"
                                   onclick="cycleProductImage(${i}, 1)">›</button>
                               <span class="pc-count" id="pccount-${i}">1 / ${images.length}</span>`
                            : ""
                    }

                </div>

                <div class="pc-body">

                    <span class="pc-code">${escapeHTML(product.code)}</span>

                    <h3>${escapeHTML(product.name)}</h3>

                    <div class="pc-chips">
                        ${chips || `<span class="pc-standard">Standard product</span>`}
                    </div>

                </div>

                <div class="pc-footer">

                    <span class="pc-price">₱${formatPrice(product.price)}</span>

                    <div class="pc-actions">
                        <button type="button" class="pc-edit" onclick="editProduct(${i})">Edit</button>
                        <button type="button" class="pc-delete" onclick="deleteProduct(${i})">Delete</button>
                    </div>

                </div>

            </article>
        `;
    }

    setRecordCount(
        document.getElementById("productCount"),
        foundProducts,
        "Product",
        "Products"
    );

    if (foundProducts === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">⌕</div>
                <strong>No products found</strong>
                <span>${
                    products.length === 0
                        ? "Add your first product using the form above."
                        : "Try a different search or category."
                }</span>
            </div>
        `;

        return;
    }

    container.innerHTML = cards;
}

function cloneInventoryVariants(
    variants
) {
    const result = [];

    variants =
        variants || [];

    for (
        let i = 0;
        i < variants.length;
        i++
    ) {
        addToArray(
            result,
            {
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
                        : DEFAULT_THRESHOLD,

                lastRestocked:
                    variants[i]
                        .lastRestocked ||
                    "",

                nextRestock:
                    variants[i]
                        .nextRestock ||
                    "",

                restockTracking:
                    cloneRestockTracking(
                        variants[i]
                            .restockTracking,
                        variants[i].quantity
                    )
            }
        );
    }

    return result;
}

function cloneProductArray(
    array
) {
    const result = [];

    array =
        array || [];

    for (
        let i = 0;
        i < array.length;
        i++
    ) {
        addToArray(
            result,
            array[i]
        );
    }

    return result;
}

function deleteProduct(
    index
) {
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

    const inventoryRecord =
        findInventoryByProductId(
            product.id
        );

    const archivedProduct = {
        id:
            product.id,

        image:
            product.image,

        images:
            cloneProductArray(
                getProductImages(product)
            ),

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
            inventoryRecord
                ? cloneInventoryVariants(
                    inventoryRecord.variants
                )
                : [],

        dateArchived:
            getDateTime()
    };

    removeInventoryRecord(
        product.id
    );

    removeFromArray(
        products,
        index
    );

    addToFront(
        archivedProducts,
        archivedProduct
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

function editProduct(
    index
) {
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
        String(roundToWhole(product.price));

    updateVariantFields();

    const sizeContainer =
        document.getElementById(
            "sizeOptions"
        );

    const colorContainer =
        document.getElementById(
            "colorOptions"
        );

    const sizeInputs =
        sizeContainer
            ? sizeContainer.querySelectorAll(
                "input"
            )
            : [];

    const colorInputs =
        colorContainer
            ? colorContainer.querySelectorAll(
                "input"
            )
            : [];

    for (
        let i = 0;
        i < sizeInputs.length;
        i++
    ) {
        sizeInputs[i].checked =
            containsValue(
                product.sizes || [],
                sizeInputs[i].value
            );
    }

    for (
        let i = 0;
        i < colorInputs.length;
        i++
    ) {
        colorInputs[i].checked =
            containsValue(
                product.colors || [],
                colorInputs[i].value
            );
    }

    // colors that are not one of the basic colors come back as manual entries
    const editColors = product.colors || [];

    for (let i = 0; i < editColors.length; i++) {
        let isBasic = false;

        for (let j = 0; j < colorInputs.length; j++) {
            if (colorInputs[j].value === editColors[i]) {
                isBasic = true;
                break;
            }
        }

        if (!isBasic && findIgnoreCase(manualColors, editColors[i]) === -1) {
            addToArray(manualColors, editColors[i]);
        }
    }

    const editScents = product.scents || [];

    for (let i = 0; i < editScents.length; i++) {
        if (findIgnoreCase(manualScents, editScents[i]) === -1) {
            addToArray(manualScents, editScents[i]);
        }
    }

    renderManualChips("color");
    renderManualChips("scent");

    if (productImage) {
        productImage.value = "";
    }

    formImages = cloneProductArray(getProductImages(product));
    renderImageGrid();
    clearAllFieldErrors();

    const banner = document.getElementById("editBanner");
    const bannerName = document.getElementById("editBannerName");

    if (banner) {
        banner.style.display = "flex";
    }

    if (bannerName) {
        bannerName.textContent = product.name + " (" + product.code + ")";
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
        "sizeOptions"
    ).innerHTML = "";

    document.getElementById(
        "colorOptions"
    ).innerHTML = "";

    resetManualEntries();

    if (productImage) {
        productImage.value = "";
    }

    formImages = [];
    renderImageGrid();
    clearAllFieldErrors();

    const editBanner = document.getElementById("editBanner");

    if (editBanner) {
        editBanner.style.display = "none";
    }

    editingIndex =
        -1;

    document.getElementById(
        "addProductButton"
    ).textContent =
        "Add Product";

    updateVariantFields();
}

function setRecordCount(element, count, singular, plural) {
    if (!element) {
        return;
    }

    element.innerHTML =
        "<strong>" + count + "</strong> " +
        (count === 1 ? (singular || "Record") : (plural || "Records"));
}

// The date input gives YYYY-MM-DD; audit dates are stored as MM/DD/YYYY.
function dateInputToDateValue(inputValue) {
    if (!inputValue || inputValue.length < 10) {
        return "";
    }

    return (
        inputValue.substring(5, 7) + "/" +
        inputValue.substring(8, 10) + "/" +
        inputValue.substring(0, 4)
    );
}

function clearAuditDate() {
    const dateInput = document.getElementById("auditDateFilter");

    if (dateInput) {
        dateInput.value = "";
    }

    displayAudit();
}

function buildAuditChangesHTML(changes) {
    if (!changes) {
        return `<span class="chg-text">—</span>`;
    }

    if (typeof changes === "string") {
        return `<span class="chg-text">${escapeHTML(changes)}</span>`;
    }

    let html = `<div class="chg-list">`;

    for (let i = 0; i < changes.length; i++) {
        const change = changes[i];

        html += `<div class="chg"><span class="chg-label">${escapeHTML(change.label)}</span>`;

        if (change.added || change.removed) {
            for (let j = 0; j < change.removed.length; j++) {
                html += `<span class="chg-tag rem">− ${escapeHTML(change.removed[j])}</span>`;
            }

            for (let j = 0; j < change.added.length; j++) {
                html += `<span class="chg-tag add">+ ${escapeHTML(change.added[j])}</span>`;
            }
        } else if (change.from !== undefined) {
            html += `
                <span class="chg-from">${escapeHTML(change.from)}</span>
                <span class="chg-arrow">→</span>
                <span class="chg-to">${escapeHTML(change.to)}</span>
            `;
        } else {
            html += `<span class="chg-text">${escapeHTML(change.text)}</span>`;
        }

        html += `</div>`;
    }

    return html + `</div>`;
}

function setAuditFilter(action) {
    const actionSelect = document.getElementById("actionFilter");

    if (!actionSelect) {
        return;
    }

    // clicking the active card again clears the filter
    actionSelect.value = actionSelect.value === action ? "" : action;

    displayAudit();
}

function displayAudit() {
    const table = document.getElementById("auditTable");

    if (!table) {
        return;
    }

    const searchInput = document.getElementById("auditSearchInput");
    const actionSelect = document.getElementById("actionFilter");

    const dateInput = document.getElementById("auditDateFilter");
    const dateWrap = document.getElementById("auditDateWrap");

    const search = searchInput ? convertToLowerCase(searchInput.value) : "";
    const filter = actionSelect ? actionSelect.value : "";
    const selectedDate = dateInput ? dateInputToDateValue(dateInput.value) : "";

    if (dateWrap) {
        if (selectedDate) {
            dateWrap.classList.add("has-value");
        } else {
            dateWrap.classList.remove("has-value");
        }
    }

    const filteredRecords = [];

    for (let i = 0; i < auditRecords.length; i++) {
        const audit = auditRecords[i];

        const matchesSearch =
            searchText(audit.productCode, search) ||
            searchText(audit.productName, search);

        const matchesFilter = filter === "" || audit.action === filter;

        const matchesDate =
            selectedDate === "" ||
            audit.date.substring(0, 10) === selectedDate;

        if (matchesSearch && matchesFilter && matchesDate) {
            addToArray(filteredRecords, audit);
        }
    }

    const icons = { Added: "+", Updated: "✎", Deleted: "×", Restored: "↺" };

    let rows = "";
    let currentDay = "";

    for (let i = 0; i < filteredRecords.length; i++) {
        const audit = filteredRecords[i];

        const day = audit.date.substring(0, 10);
        const time = audit.date.substring(11);

        // a divider row whenever the day changes
        if (day !== currentDay) {
            currentDay = day;

            rows += `
                <tr class="au-day">
                    <td colspan="4">
                        <strong>${escapeHTML(formatFriendlyDate(day))}</strong>
                        <span>${escapeHTML(firstLetterUpper(describeDaysFromToday(day)))}</span>
                    </td>
                </tr>
            `;
        }

        const actionClass = "action-" + convertToLowerCase(audit.action);

        rows += `
            <tr>

                <td data-label="When">
                    <div class="au-when">
                        <strong>${escapeHTML(time)}</strong>
                        <span>${escapeHTML(audit.user)}</span>
                    </div>
                </td>

                <td data-label="Product">
                    <div class="au-product">
                        <strong>${escapeHTML(audit.productName)}</strong>
                        <span class="au-code">${escapeHTML(audit.productCode)}</span>
                    </div>
                </td>

                <td data-label="Action">
                    <span class="action-badge ${actionClass}">
                        <i>${icons[audit.action] || "•"}</i>
                        ${escapeHTML(audit.action)}
                    </span>
                </td>

                <td data-label="Changes">
                    ${buildAuditChangesHTML(audit.changes)}
                </td>

            </tr>
        `;
    }

    table.innerHTML = rows;

    const recordCount = document.getElementById("recordCount");
    const emptyMessage = document.getElementById("emptyMessage");

    setRecordCount(recordCount, filteredRecords.length);

    if (emptyMessage) {
        if (filteredRecords.length === 0) {
            emptyMessage.innerHTML =
                auditRecords.length === 0
                    ? `<div class="empty-icon">≡</div>
                       <strong>No activity yet</strong>
                       <span>Adding, editing, deleting or restoring a product will be recorded here.</span>`
                    : `<div class="empty-icon">⌕</div>
                       <strong>No matching records</strong>
                       <span>Try a different search, date or action filter.</span>`;

            emptyMessage.style.display = "flex";
        } else {
            emptyMessage.style.display = "none";
        }
    }

    // highlight the summary card that matches the active filter
    const cards = document.querySelectorAll(".summary-filter");

    for (let i = 0; i < cards.length; i++) {
        if ((cards[i].dataset.filter || "") === filter) {
            cards[i].classList.add("active");
        } else {
            cards[i].classList.remove("active");
        }
    }
}

function updateAudit() {
    let added = 0;
    let updated = 0;
    let deleted = 0;
    let restored = 0;

    for (let i = 0; i < auditRecords.length; i++) {
        const action = auditRecords[i].action;

        if (action === "Added") {
            added++;
        } else if (action === "Updated") {
            updated++;
        } else if (action === "Deleted") {
            deleted++;
        } else if (action === "Restored") {
            restored++;
        }
    }

    const targets = [
        ["totalActivities", auditRecords.length],
        ["addedCount", added],
        ["updatedCount", updated],
        ["deletedCount", deleted],
        ["restoredCount", restored]
    ];

    for (let i = 0; i < targets.length; i++) {
        const element = document.getElementById(targets[i][0]);

        if (element) {
            element.textContent = targets[i][1];
        }
    }

    displayAudit();
}

// Shows the initials tile when an image is missing or fails to load.
function showImageFallback(image) {
    if (image && image.parentNode) {
        image.parentNode.classList.add("no-image");
        image.style.display = "none";
    }
}

function displayArchivedProducts() {
    const container = document.getElementById("archiveContainer");

    if (!container) {
        return;
    }

    const searchInput = document.getElementById("archiveSearchInput");
    const categoryFilter = document.getElementById("archiveFilterCategory");

    const search = searchInput ? convertToLowerCase(searchInput.value) : "";
    const selectedCategory = categoryFilter ? categoryFilter.value : "";

    const filteredProducts = [];

    for (let i = 0; i < archivedProducts.length; i++) {
        const product = archivedProducts[i];

        const matchesSearch =
            searchText(product.name, search) ||
            searchText(product.code, search);

        const matchesCategory =
            selectedCategory === "" || product.category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            addToArray(filteredProducts, { product: product, index: i });
        }
    }

    const count = document.getElementById("archiveRecordCount");

    setRecordCount(count, filteredProducts.length);

    if (filteredProducts.length === 0) {
        container.innerHTML =
            archivedProducts.length === 0
                ? `<div class="empty-state">
                       <div class="empty-icon">▣</div>
                       <strong>The archive is empty</strong>
                       <span>Products you delete are kept here so they can be restored with their stock.</span>
                   </div>`
                : `<div class="empty-state">
                       <div class="empty-icon">⌕</div>
                       <strong>No matching archived products</strong>
                       <span>Try a different search or category.</span>
                   </div>`;

        return;
    }

    let cards = "";

    for (let i = 0; i < filteredProducts.length; i++) {
        const product = filteredProducts[i].product;
        const index = filteredProducts[i].index;

        const variants = product.inventoryVariants || [];
        let units = 0;

        for (let j = 0; j < variants.length; j++) {
            units += Number(variants[j].quantity) || 0;
        }

        const archivedDay = product.dateArchived
            ? product.dateArchived.substring(0, 10)
            : "";

        const facts = variants.length > 0
            ? `
                <div class="ar-facts">
                    <div>
                        <span>Variants</span>
                        <strong>${variants.length}</strong>
                    </div>
                    <div>
                        <span>Stock kept</span>
                        <strong>${units} ${units === 1 ? "unit" : "units"}</strong>
                    </div>
                </div>
            `
            : "";

        cards += `
            <article class="ar-card">

                <div class="ar-media ${product.image ? "" : "no-image"}">
                    ${
                        product.image
                            ? `<img
                                   src="${escapeHTML(product.image)}"
                                   alt="${escapeHTML(product.name)}"
                                   onerror="showImageFallback(this)">`
                            : ""
                    }
                    <span class="ar-initials">
                        ${escapeHTML(getProductInitials(product.name))}
                    </span>
                    ${
                        getProductImages(product).length > 1
                            ? `<span class="ar-photos">${getProductImages(product).length} photos</span>`
                            : ""
                    }
                </div>

                <div class="ar-body">

                    <div class="ar-top">
                        <span class="ar-code">${escapeHTML(product.code)}</span>
                        <span class="ar-category">${escapeHTML(product.category)}</span>
                    </div>

                    <h3>${escapeHTML(product.name)}</h3>

                    <div class="ar-price">₱${formatPrice(product.price)}</div>

                    ${facts}

                    ${
                        archivedDay
                            ? `<div class="ar-when">
                                   Archived ${escapeHTML(formatFriendlyDate(archivedDay))}
                                   • ${escapeHTML(describeDaysFromToday(archivedDay))}
                               </div>`
                            : ""
                    }

                </div>

                <div class="ar-actions">
                    <button type="button" class="ar-restore" onclick="restoreArchivedProduct(${index})">
                        Restore
                    </button>
                    <button type="button" class="ar-delete" onclick="deleteArchivedProduct(${index})" title="Permanently delete this product">
                        Delete forever
                    </button>
                </div>

            </article>
        `;
    }

    container.innerHTML = cards;
}

function restoreArchivedProduct(
    index
) {
    const product =
        archivedProducts[index];

    if (!product) {
        return;
    }

    const restoredProduct = {
        id:
            product.id,

        image:
            product.image,

        images:
            cloneProductArray(
                getProductImages(product)
            ),

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
                        variant.color ||
                        "",

                    size:
                        variant.size ||
                        "",

                    scent:
                        variant.scent ||
                        "",

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
                            : DEFAULT_THRESHOLD,

                    lastRestocked:
                        variant.lastRestocked ||
                        "",

                    nextRestock:
                        variant.nextRestock ||
                        "",

                    restockTracking:
                        cloneRestockTracking(
                            variant.restockTracking,
                            variant.quantity
                        )
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

    addAuditRecord(
        product,
        "Deleted",
        "Permanently deleted from Product Archive"
    );

    removeFromArray(
        archivedProducts,
        index
    );

    displayArchivedProducts();
    updateAudit();
}

function getLowStockVariants(
    item
) {
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

function getStatus(
    item
) {
    const variants =
        item.variants || [];

    if (
        variants.length === 0
    ) {
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

        if (
            quantity > 0
        ) {
            allOut = false;
        }

        if (
            quantity > 0 &&
            quantity <= threshold
        ) {
            hasLow = true;
        }

        if (
            quantity === 0
        ) {
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

function getStatusText(
    status
) {
    if (
        status === "out"
    ) {
        return "Out of Stock";
    }

    if (
        status === "low"
    ) {
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

        if (
            status ===
            "available"
        ) {
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
            restockRecords[i]
                .productId ===
                productId &&
            restockRecords[i]
                .variantKey ===
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
        getVariantKey(
            variant
        );

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

    if (
        quantityToAdd < 1
    ) {
        quantityToAdd = 1;
    }

    if (existing) {
        existing.currentQuantity =
            currentQuantity;

        existing.threshold =
            threshold;

        existing.quantity =
            quantityToAdd;

        copyRestockDatesToRecord(
            existing,
            variant
        );

        if (
            currentQuantity <=
            threshold
        ) {
            // dropped below the threshold again after a restock: new trigger
            if (
                existing.status ===
                "Restocked"
            ) {
                existing.date =
                    getDateTime();
            }

            existing.status =
                "Automatic Restock";
        } else {
            existing.status =
                "Restocked";
        }

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

            lastRestocked:
                variant.lastRestocked ||
                "",

            nextRestock:
                variant.nextRestock ||
                "",

            nextRestockType:
                variant.nextRestockType ||
                "unknown",

            nextRestockNote:
                variant.nextRestockNote ||
                "",

            stockedSince:
                variant.restockTracking
                    ? variant.restockTracking.baseDate
                    : "",

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

            refreshRestockDates(
                variant
            );

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

            const existing =
                findRestockRecord(
                    item.productId,
                    variantKey
                );

            if (
                quantity <=
                threshold
            ) {
                addToArray(
                    activeKeys,
                    key
                );

                createAutomaticRestock(
                    item,
                    variant
                );
            } else if (
                existing
            ) {
                existing.currentQuantity =
                    quantity;

                existing.threshold =
                    threshold;

                existing.quantity =
                    0;

                copyRestockDatesToRecord(
                    existing,
                    variant
                );

                existing.status =
                    "Restocked";
            }
        }
    }

    for (
        let i =
            restockRecords.length - 1;
        i >= 0;
        i--
    ) {
        const record =
            restockRecords[i];

        let stillExists =
            false;

        for (
            let j = 0;
            j < inventory.length;
            j++
        ) {
            if (
                String(
                    inventory[j]
                        .productId
                ) ===
                String(
                    record.productId
                )
            ) {
                stillExists = true;
                break;
            }
        }

        if (!stillExists) {
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
            getStatusText(
                status
            );

        const totalStock =
            getTotalStock(item);

        const variantCount =
            variants.length;

        let variantPreview = "";

        let previewLimit =
            variantCount;

        if (
            previewLimit > 3
        ) {
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

        if (
            variantCount > 3
        ) {
            extraVariants =
                " + " +
                (
                    variantCount - 3
                ) +
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
                        )}')"
                    >
                        View Stock
                    </button>

                </td>

            </tr>
        `;
    }

    if (
        filteredCount === 0
    ) {
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

// Groups restock records by product so each product gets one card.
// Products that still need restocking come first, and inside a product
// the variants that need restocking come before the ones already restocked.
function getRestockGroups() {
    const groups = [];

    for (let i = 0; i < restockRecords.length; i++) {
        const record = restockRecords[i];
        let group = null;

        for (let j = 0; j < groups.length; j++) {
            if (String(groups[j].productId) === String(record.productId)) {
                group = groups[j];
                break;
            }
        }

        if (!group) {
            group = {
                productId: record.productId,
                productName: record.productName,
                productCode: record.productCode,
                triggered: [],
                restocked: []
            };

            addToArray(groups, group);
        }

        if (record.status === "Restocked") {
            addToArray(group.restocked, record);
        } else {
            addToArray(group.triggered, record);
        }
    }

    const ordered = [];

    for (let i = 0; i < groups.length; i++) {
        if (groups[i].triggered.length > 0) {
            addToArray(ordered, groups[i]);
        }
    }

    for (let i = 0; i < groups.length; i++) {
        if (groups[i].triggered.length === 0) {
            addToArray(ordered, groups[i]);
        }
    }

    return ordered;
}

function buildRestockRow(record) {
    const isRestocked = record.status === "Restocked";
    const isOut = !isRestocked && record.currentQuantity === 0;

    let pillClass = "";
    let pillText = "Restock triggered";

    if (isRestocked) {
        pillClass = "done";
        pillText = "Restocked";
    } else if (isOut) {
        pillClass = "out";
        pillText = "Out of stock";
    }

    // the meter is full at twice the threshold, so the tick sits at the threshold
    let maxValue = record.threshold * 2;

    if (maxValue < 1) {
        maxValue = 1;
    }

    let percent = (record.currentQuantity / maxValue) * 100;

    if (percent > 100) {
        percent = 100;
    }

    percent = percent - (percent % 1);

    let lastValue = "No restock yet";
    let lastNote = "";

    if (record.lastRestocked) {
        lastValue = formatFriendlyDate(record.lastRestocked);
        lastNote = firstLetterUpper(describeDaysFromToday(record.lastRestocked));
    } else if (record.stockedSince) {
        lastNote = "In stock since " + formatFriendlyDate(record.stockedSince);
    }

    let nextValue = "Not enough data";

    if (record.nextRestock) {
        nextValue = formatFriendlyDate(record.nextRestock);
    } else if (record.nextRestockType === "far") {
        nextValue = "Not needed soon";
    }

    const overdue =
        record.nextRestockType === "expected" &&
        record.nextRestock &&
        getDaysBetween(getDateOnly(), record.nextRestock) < 0;

    const nextLabel =
        record.nextRestockType === "expected"
            ? "Expected restock"
            : "Possible next restock";

    return `
        <div class="rs-row">

            <div class="rs-cell rs-variant">
                <strong>${escapeHTML(record.variantLabel)}</strong>
                <span class="rs-pill ${pillClass}">${pillText}</span>
            </div>

            <div class="rs-cell rs-stock" data-label="Stock">
                <strong>${record.currentQuantity}</strong>
                <span>min ${record.threshold}</span>
                <div class="rs-meter ${pillClass}">
                    <i style="width: ${percent}%"></i>
                </div>
            </div>

            <div class="rs-cell" data-label="To order">
                ${
                    isRestocked
                        ? `<span class="rs-muted">—</span>`
                        : `<span class="rs-add">+${record.quantity}</span>`
                }
            </div>

            <div class="rs-cell" data-label="Last restocked">
                <strong>${escapeHTML(lastValue)}</strong>
                ${lastNote ? `<small>${escapeHTML(lastNote)}</small>` : ""}
            </div>

            <div class="rs-cell rs-next ${overdue ? "overdue" : ""}" data-label="${nextLabel}">
                <strong>${escapeHTML(nextValue)}</strong>
                ${
                    record.nextRestockNote
                        ? `<small>${escapeHTML(record.nextRestockNote)}</small>`
                        : ""
                }
            </div>

        </div>
    `;
}

function buildRestockCard(group) {
    const totalVariants = group.triggered.length + group.restocked.length;
    const needCount = group.triggered.length;

    let hasOut = false;
    let totalToOrder = 0;
    let latestTrigger = "";

    for (let i = 0; i < group.triggered.length; i++) {
        const record = group.triggered[i];

        if (record.currentQuantity === 0) {
            hasOut = true;
        }

        totalToOrder += record.quantity;

        const triggerDate = record.date ? record.date.substring(0, 10) : "";

        if (
            triggerDate &&
            (!latestTrigger || getDaysBetween(latestTrigger, triggerDate) > 0)
        ) {
            latestTrigger = triggerDate;
        }
    }

    let badgeClass = "";
    let badgeText = needCount + " of " + totalVariants + " need restocking";

    if (needCount === 0) {
        badgeClass = "done";
        badgeText = "All restocked";
    } else if (hasOut) {
        badgeClass = "out";
    }

    let rows = "";

    for (let i = 0; i < group.triggered.length; i++) {
        rows += buildRestockRow(group.triggered[i]);
    }

    for (let i = 0; i < group.restocked.length; i++) {
        rows += buildRestockRow(group.restocked[i]);
    }

    let footer = "";

    if (needCount > 0) {
        footer = `
            <div class="rs-card-footer">
                <div class="rs-footer-left">
                    <i>✓</i>
                    <span><strong>Supplier automatically notified</strong></span>
                </div>
                <div class="rs-footer-right">
                    Total to order <strong>${totalToOrder} units</strong>
                    ${
                        latestTrigger
                            ? ` • Triggered <strong>${escapeHTML(formatFriendlyDate(latestTrigger))}</strong>`
                            : ""
                    }
                </div>
            </div>
        `;
    } else {
        footer = `
            <div class="rs-card-footer">
                <div class="rs-footer-left">
                    <i>✓</i>
                    <span><strong>All variants are back above their threshold</strong></span>
                </div>
            </div>
        `;
    }

    return `
        <div class="rs-card ${needCount === 0 ? "all-done" : ""}">

            <div class="rs-card-header">

                <div class="rs-product">
                    <div class="rs-product-icon">
                        ${escapeHTML(getProductInitials(group.productName))}
                    </div>
                    <div>
                        <h3>${escapeHTML(group.productName)}</h3>
                        <span>
                            ${escapeHTML(group.productCode)} •
                            ${totalVariants} ${totalVariants === 1 ? "variant" : "variants"}
                        </span>
                    </div>
                </div>

                <div class="rs-badge ${badgeClass}">${badgeText}</div>

            </div>

            <div class="rs-table">

                <div class="rs-row rs-head">
                    <div>Variant</div>
                    <div>Stock</div>
                    <div>To order</div>
                    <div>Last restocked</div>
                    <div>Next restock</div>
                </div>

                ${rows}

            </div>

            ${footer}

        </div>
    `;
}

function renderRestocking() {
    const restockList =
        document.getElementById("restockList");

    if (!restockList) {
        return;
    }

    checkAutomaticRestock();

    if (restockRecords.length === 0) {
        restockList.innerHTML = `
            <div class="restock-empty" id="restockEmpty">
                <div class="empty-icon">↻</div>
                <strong>No restocking activity</strong>
                <span>
                    Automatic restocking records will appear here when an item reaches its threshold.
                </span>
            </div>
        `;

        return;
    }

    const groups = getRestockGroups();

    let cards = "";

    for (let i = 0; i < groups.length; i++) {
        cards += buildRestockCard(groups[i]);
    }

    restockList.innerHTML = cards;
}

function openStockModal(
    id
) {
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

        stockMessage.classList.remove(
            "stock-save-success"
        );
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
            stockForm.insertBefore(
                variantContainer,
                stockForm.querySelector(
                    ".modal-actions"
                )
            );
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

        if (
            quantity === 0
        ) {
            statusClass =
                "out";

            statusText =
                "Out of Stock";

        } else if (
            quantity <=
            threshold
        ) {
            statusClass =
                "low";

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
        function(event) {
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
                    quantityInputs[i]
                        .closest(
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

                if (
                    quantity >
                    oldQuantity
                ) {
                    recordVariantRestock(
                        variant,
                        quantity
                    );
                }
            }

            if (
                changedCount > 0
            ) {
                message.innerHTML =
                    "Stock changes saved successfully.";

                message.classList.add(
                    "stock-save-success"
                );
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
        function(event) {
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

    if (
        page === "products"
    ) {
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

    if (
        page === "inventory"
    ) {
        if (productMenu) {
            productMenu.style.display =
                "none";
        }

        if (productToggle) {
            productToggle.textContent =
                "+";
        }
    }

    if (
        page === "audit"
    ) {
        updateAudit();
    }

    if (
        page === "archive"
    ) {
        displayArchivedProducts();
    }

    if (
        page === "inventory"
    ) {
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
        function(event) {
            event.preventDefault();
            addProduct();
        }
    );
}

if (productImage) {
    productImage.addEventListener(
        "change",
        function() {
            addFormImages(productImage.files);

            // reset so picking the same file again still fires "change"
            productImage.value = "";
        }
    );
}

const productImageZone = document.getElementById("productImageZone");

if (productImageZone) {
    const highlightEvents = ["dragenter", "dragover"];
    const unhighlightEvents = ["dragleave", "drop"];

    for (let i = 0; i < highlightEvents.length; i++) {
        productImageZone.addEventListener(highlightEvents[i], function() {
            productImageZone.classList.add("dragover");
        });
    }

    for (let i = 0; i < unhighlightEvents.length; i++) {
        productImageZone.addEventListener(unhighlightEvents[i], function() {
            productImageZone.classList.remove("dragover");
        });
    }
}

renderImageGrid();

if (category) {
    category.addEventListener(
        "change",
        function() {
            updateVariantFields();
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
