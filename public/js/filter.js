if (typeof availability_filter !== "undefined"){
    const data = [
        {
            src:'images/grid1.jpg',
            category:'Category 2'
        },
        {
            src:'images/grid2.jpg',
            category:'Category 2'       
        },
        {
            src:'images/grid3.jpg',
            category:'Category 2'          
        },
        {
            src:'images/grid4.jpg',
            category:'Category 1'        
        },
        {
            src:'images/grid5.jpg',
            category:'Category 2'        
        }
    ]
    let topContent = document.getElementById('top-content')
    let items2 = document.getElementById('items')

    let categories = []
    for(let item of data){
        categories.push(item.category)
    }
    // console.log(categories);
    categories = [...new Set(categories)]
    // console.log(categories);

    let output =`<div onClick="filterItems('all')">all</div>`

    for(let category of categories){
        output +=`<div onClick="filterItems('${category}')">${category}</div>`
    }
    topContent.innerHTML = output

    let outputItems = ``
    for(let item of data){
        outputItems +=`
        <div class="grid_item">
            <div class="grid-left"></div>
            <div class="grid-right"></div>
            <img src="${item.src}"/>
        </div>
        `
    }
    items2.innerHTML = outputItems

    function filterItems(categ){
        // console.log(categ);
        let outputFilter = ``
        for(let item of data){
            if(item.category == categ){
                outputFilter += `
                    <div class="grid_item">
                        <div class="grid-left"></div>
                        <div class="grid-right"></div>
                        <img src="${item.src}"/>
                    </div>
                    `
            }else if(categ == 'all'){
                outputFilter += `
                <div class="grid_item">
                    <div class="grid-left"></div>
                    <div class="grid-right"></div>
                    <img src="${item.src}"/>
                </div>
                `           
            }
        }
        items2.innerHTML = outputFilter
    }
}else{
    // console.log('нет фильтра');
}    