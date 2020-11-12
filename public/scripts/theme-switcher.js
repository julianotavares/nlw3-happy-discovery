const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    pgLandingFg: getStyle(html, "--pg-landing-fg"),
    pgLandingBg: getStyle(html, "--pg-landing-bg"),
    colorText: getStyle(html, "--color-text"),
    sidebar: getStyle(html, "--sidebar"),
    colorHeadings: getStyle(html, "--color-headings"),
    mapContainer: getStyle(html, "--map-container"),
    formBg: getStyle(html, "--form-bg"),
    formBorder: getStyle(html, "--form-border"),
    formText: getStyle(html, "--form-text"),
    inputBg: getStyle(html, "--input-bg"),
    buttonBg: getStyle(html, "--button-bg"),
    buttonSelect: getStyle(html, "--button-select"),
    buttonSelectActive: getStyle(html, "--button-select-active"),
}

const darkMode = {
    bg: "#333333",
    pgLandingFg: "#000000",
    pgLandingBg: "#001aaa",
    colorText: "#f33ddd",
    sidebar: "#0c4349",
    colorHeadings: "#3664FF",
    mapContainer: "#212D40",
    formBg: "#11151c",
    formBorder: "#212D40",
    formText: "#CEDEE5",
    inputBg: "#212D40",
    buttonBg: "#536d97",
    buttonSelect: "#3e5274",
    buttonSelectActive: "#859e92"
    
}


const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}