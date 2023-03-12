let iconsSearch = document.querySelector('.icons-search')
let googleSearch = document.querySelector('.google-search')
let options = document.querySelector('#options')
let recentsC = document.querySelector('#recents-c')
let gridB = document.querySelector('#grid-b')
let listB = document.querySelector('#list-b')
let iconsContainer = document.querySelector('.icons-container')
let searchContent = document.querySelector('.search-content')
let openIcons = document.querySelector('#open-icons')
let openGoogle = document.querySelector('#open-google')

let alertCler;
// view btns
gridB.addEventListener('click', () => {
    let iconsContainerBtns = iconsContainer.querySelectorAll('.icons-container button')
    iconsContainerBtns.forEach(item => {
        item.className = 'grid'
    })
})

listB.addEventListener('click', () => {
    let iconsContainerBtns = iconsContainer.querySelectorAll('.icons-container button')
    iconsContainerBtns.forEach(item => {
        item.className = 'list'
    })
})

// options and search
let dataArrays = soliddata.concat(regulardata,
    materialdata, iosdata, brandsdata, brandscolordata, 
    addon1data, bootstrap, iconic)
iconsSearch.placeholder = `Search icons from ${dataArrays.length} icons....`
let currentArray = dataArrays
options.addEventListener('input', (e) => {
    let value = e.target.value
    if (value == 'all') {
        currentArray = dataArrays
    } else if (value == 'brands') {
        currentArray = brandsdata
    } else if (value == 'regular') {
        currentArray = regulardata
    } else if (value == 'material') {
        currentArray = materialdata
    } else if (value == 'ios') {
        currentArray = iosdata
    } else if (value == 'brandscolor') {
        currentArray = brandscolordata
    } else if (value == 'addon-1') {
        currentArray = addon1data
    } else if (value == 'addon-1') {
        currentArray = soliddata
    } else if (value == 'bootstrap') {
        currentArray = bootstrap
    } else if (value == 'iconic') {
        currentArray = iconic
    }
    
})

iconsSearch.addEventListener('keyup', (e) => {
    
    let value = e.target.value.trim()

    if (value.length > 0) {
        searchContent.classList.add('active')
        iconsContainer.classList.add('active')
        let TempArray1 = []
        TempArray1 = currentArray.filter((data) => {
            return data.slice(3, data.length).toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
        })
        TempArray1 = TempArray1.map((data) => {
            return data = `<button class="grid" onclick="copyVal(this)" d-title="${data.slice(3, data.length)}"><i class="${data.slice(0, 2)} ${data}"></i></button>`
        })
        iconRender(TempArray1)
    } else {
        iconsContainer.innerHTML = ''
        searchContent.classList.remove('active')
        iconsContainer.classList.remove('active')
    }
})

function iconRender(list) {
    if (list.length) {
        iconsContainer.innerHTML = list.join('')
        iconsContainer.classList.remove('not')
    } else {
        iconsContainer.innerHTML = ''
        iconsContainer.classList.add('not')
    }
}

let copyInput = document.querySelector('#copy-input')
let recentIcon = document.querySelector('#recent-icon')

function copyVal(btn) {
    recentIcon.innerHTML = btn.innerHTML
    copyInput.value = btn.innerHTML
    copyInput.select()
    document.execCommand('copy')
    clearTimeout(alertCler)
    alertBox('copied !')
}

let heartMusic = document.querySelector('#heart-music')
let audio = new Audio('assets/src/music.mp3')
heartMusic.addEventListener('mouseover', () => {
    audio.play()
    audio.loop
    heartMusic.style = `animation: anihearth .8s linear infinite;`
})

heartMusic.addEventListener('mouseleave', () => {
    audio.pause()
    heartMusic.style = `animation: aniheart 1s linear infinite;`
})

let openLink = document.querySelector('#open-link')
let link = document.querySelector('.link')
openLink.addEventListener('click', () => {
    link.classList.add('active')
})

let linktag = document.querySelector('#linktag')
let linktagBtn = document.querySelector('#linktag-btn')
linktagBtn.addEventListener('click',() => {
    linktag.select()
    document.execCommand('copy')
    clearTimeout(alertCler)
    alertBox('copied !')
    setTimeout(() => {
        link.classList.remove('active')
    }, 1000)
})

let alertC = document.querySelector('.alert-box')

function alertBox(text) {
    alertC.classList.add('active')
    alertC.innerHTML = `
    <div>
        ${text}
    </div>`
    alertCler = setTimeout(() => {
        alertC.classList.remove('active')
    }, 2000)
}

openIcons.addEventListener('click', () => {
    iconsSearch.style.display = 'block'
    googleSearch.style.display = 'none'
    options.style.display = 'block'
})

openGoogle.addEventListener('click', () => {
    iconsSearch.style.display = 'none'
    googleSearch.style.display = 'block'
    options.style.display = 'none'
    googleSearch.placeholder = `Search from ${googleicon1.length} google icons....`
})

googleSearch.addEventListener('keyup', (e) => {
    let value = e.target.value.trim()

    if(value.length > 0){
        searchContent.classList.add('active')
        iconsContainer.classList.add('active')
        let TempArray1 = []
        TempArray1 = googleicon1.filter((data) => {
            return data.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
        })

        TempArray1 = TempArray1.map((data) => {
            return `<button class="grid" onclick="copyVal(this)" d-title="${data}"><i class="google-icons">${data}</i></button>`
        })
        iconRender(TempArray1)
    } else{
        iconsContainer.innerHTML = ''
        searchContent.classList.remove('active')
        iconsContainer.classList.remove('active')
    }
})

