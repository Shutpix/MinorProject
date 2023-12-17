const API_URL = 'https://crudcrud.com/api/5c13a8d796dd4967b5a06892f5f670ec/productData';

var form = document.getElementById('my-form');

form.addEventListener('submit', getValues);

async function getValues(e) {
    e.preventDefault();

    var ProductName = document.getElementById('name').value;
    var Price = document.getElementById('price').value;
    var category = document.getElementById('category').value;

    let myObj = {
        name: ProductName,
        price: Price,
        category: category
    };

    showData(myObj);

    try {
        const response = await axios.post(API_URL, myObj);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}

async function deleteItem(e, itemList) {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        var text = li.innerText;
        var individualText = text.split('-');
        var name = individualText[0];
        var id;

        try {
            const response = await axios.get(API_URL);

            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].name === name) {
                    id = response.data[i]._id;
                }
                const url = `${API_URL}/${id}`;

                try {
                    const deleteResponse = await axios.delete(url);
                    console.log(deleteResponse);
                } catch (err) {
                    console.log(err);
                }
            }
        } catch (err) {
            console.log(err);
        }
        itemList.removeChild(li);
    }
}

var itemList1 = document.getElementById('list1');
itemList1.addEventListener('click', (e) => deleteItem(e, itemList1));

var itemList2 = document.getElementById('list2');
itemList2.addEventListener('click', (e) => deleteItem(e, itemList2));

var itemList3 = document.getElementById('list3');
itemList3.addEventListener('click', (e) => deleteItem(e, itemList3));

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response);

        for (var i = 0; i < response.data.length; i++) {
            showData(response.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
});

async function showData(obj) {
    var li = document.createElement('li');
    li.className = 'item';
    var delbutton = document.createElement('button');
    delbutton.className = 'float-right delete';
    delbutton.appendChild(document.createTextNode('delete'));
    li.appendChild(document.createTextNode(`${obj.name}-${obj.price}-${obj.category}`));
    li.appendChild(delbutton);

    var itemList;
    switch (obj.category) {
        case 'Electronic':
            itemList = document.getElementById('list1');
            break;
        case 'Food':
            itemList = document.getElementById('list2');
            break;
        case 'Skin Care':
            itemList = document.getElementById('list3');
            break;
        default:
            console.log("Error");
    }

    if (itemList) {
        itemList.appendChild(li);
    }
}
