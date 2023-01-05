// global variable declaration start here
const navLink = document.querySelectorAll(".nav-link"),
    locations = location.pathname,
    pockWrapper = document.querySelector(".pock .wrapper"),
    // nextBtn = document.querySelector(".next-btn"),
    // prevBtn = document.querySelector(".prev-btn"),
    btn = document.querySelectorAll(".btn");

// console.log(btn);
let limit = 12,
    offset = 0,
    totalData = 120,
    noOfPages = totalData / limit,
    url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
const ul = document.createElement('ul');
ul.className = "pagination-ctrl";

// creating previous btn
const prevBtn = document.createElement('a'),
    prevLi = document.createElement('li');
prevBtn.className = "prev-btn";
prevBtn.innerText = "Previous";
prevBtn.href = '#FIXME';
prevLi.appendChild(prevBtn);
ul.prepend(prevLi);
// creating button with respect to number of pages
for (let i = 1; i <= noOfPages; i++) {
    const li = document.createElement('li');
    const btn = document.createElement('a');
    btn.className = "btn";
    btn.href = "#FIXME"
    btn.innerText = i;
    li.appendChild(btn);
    ul.appendChild(li);
};
// creating next btn
pockWrapper.appendChild(ul);
const nextBtn = document.createElement('a'),
    nextLi = document.createElement('li');
nextBtn.className = "next-btn";
nextBtn.innerText = "Next";
nextBtn.href = '#FIXME';
nextLi.appendChild(nextBtn);
ul.appendChild(nextLi);
// global variable declaration end here

//  active class func start here
navLink.forEach(element => {
    const elementAttr = element.getAttribute("href");
    if (locations === elementAttr) {
        const active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active")
        }
        element.classList.add("active");
    }
});
//  active class func end here

// api fetching start here
const fetchFunction = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            getData(data);
        } else {
            throw (`Bad http Request ${response.status}`);
        }

    } catch (error) {
    }
}
fetchFunction(url);

// getting data from fetch
const getData = data => {
    // console.log(data);
    const value = data.results;
    pockList = document.createElement("ul");
    pockList.className = "pock-list";
    value.forEach(res => {
        const urlFet = async () => {
            try {
                const urlRes = await fetch(res.url);
                if (urlRes.ok) {
                    const datas = await urlRes.json(),
                        image = datas.sprites.other.dream_world.front_default;
                    creatData(datas, image);

                } else {
                    throw (`Bad http Request ${urlRes.status}`);
                }

            } catch (er) {
                console.log(er);
            }
        }
        urlFet();

    })
    pockWrapper.insertBefore(pockList, pockWrapper.children[1]);

};

// creating data from fetch
const creatData = (datas, image) => {
    const pockItem = document.createElement("li");
    pockItem.className = "pock-item";
    pockItem.innerHTML = `<h2 class="pock-heading">${datas.name}</h2>
   <figure><img src=${image} alt="${datas.name}"></figure>`;
    pockList.appendChild(pockItem);

}
// // next pagination start here
next = document.querySelector(".next-btn");
next.addEventListener("click", (e) => {
    offset += 12;
    e.preventDefault();
    // console.log(offset);
    let nextUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    url = nextUrl;
    next.href = "";
    next.href = url;
    pockList.innerHTML = '';
    fetchFunction(url);
    if (offset === 108) {
        next.classList.add("next-active");
    }
});
// // next pagination end here

// // previous pagination strat here
prev = document.querySelector(".prev-btn");
prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (offset != 0) {
        offset -= 12;
        console.log(offset);
        let nextUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        url = nextUrl;
        prev.href = url;
        pockList.innerHTML = '';
        fetchFunction(url);
    }
    next.classList.remove("next-active");
});
// previous pagination end here