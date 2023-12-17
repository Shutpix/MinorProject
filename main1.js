var form = document.getElementById('my-form');

form.addEventListener('submit',getValues);


function getValues(e)
{
    e.preventDefault();
    var ProductName = document.getElementById('name').value;
	var Price = document.getElementById('price').value;
	var category  = document.getElementById('category').value;
    let myObj = {
		name: ProductName,
		price: Price,
	    category: category
	};
    showData(myObj);
    axios.post("https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData",myObj)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}

function showData(obj){
        //console.log(obj.category);
        
        var li = document.createElement('li');
    	li.className='item';
        var delbutton  = document.createElement('button');
        delbutton.className= 'float-right delete';
        delbutton.appendChild(document.createTextNode('delete'));
        li.appendChild(document.createTextNode(`${obj.name}-${obj.price}-${obj.category}`));
        li.appendChild(delbutton);
        
        if(obj.category=='Electronic'){
            var itemList = document.getElementById('list1');
            itemList.appendChild(li);
        }
        else if(obj.category=='Food'){
            var itemList = document.getElementById('list2');
            itemList.appendChild(li);
        }
        else if(obj.category=='Skin Care'){
            var itemList = document.getElementById('list3');
            itemList.appendChild(li);
        }
        
        
    }
    
    var itemList1 = document.getElementById('list1');
itemList1.addEventListener('click',deleteItem1);

function deleteItem1(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        var text = li.innerText;
        //console.log(text);
        var individualText = text.split('-');
        console.log(individualText[0]);
        var name = individualText[0];
        var id;
        axios.get('https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData')
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
                if(response.data[i].name === name){
                    id= response.data[i]._id;
                    //console.log(id)

                }
                url = 'https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData/'
                const urlMain = url+id;
                //console.log(urlMain);
                axios.delete(urlMain).then((response)=>console.log(response)).catch((err)=>console.log(err));
            }
        }).catch((err)=>{
            console.log(err);
        })
       
        itemList1.removeChild(li);
    }
}

var itemList2 = document.getElementById('list2');
itemList2.addEventListener('click',deleteItem2);

function deleteItem2(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        var text = li.innerText;
        //console.log(text);
        var individualText = text.split('-');
        console.log(individualText[0]);
        var name = individualText[0];
        var id;
        axios.get('https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData')
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
                if(response.data[i].name === name){
                    id= response.data[i]._id;
                    //console.log(id)

                }
                url = 'https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData/'
                const urlMain = url+id;
                //console.log(urlMain);
                axios.delete(urlMain).then((response)=>console.log(response)).catch((err)=>console.log(err));
            }
        }).catch((err)=>{
            console.log(err);
        })
        itemList2.removeChild(li);
    }
}

var itemList3 = document.getElementById('list3');
itemList3.addEventListener('click',deleteItem3);

    function deleteItem3(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        var text = li.innerText;
        //console.log(text);
        var individualText = text.split('-');
        console.log(individualText[0]);
        var name = individualText[0];
        var id;
        axios.get('https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData')
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
                if(response.data[i].name === name){
                    id= response.data[i]._id;
                    //console.log(id)

                }
                url = 'https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData/'
                const urlMain = url+id;
                //console.log(urlMain);
                axios.delete(urlMain).then((response)=>console.log(response)).catch((err)=>console.log(err));
            }
        }).catch((err)=>{
            console.log(err);
        })
       
        itemList3.removeChild(li);
    }
}

    window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/e92334666cb648419dc80df279a4617d/productData')
    .then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++){
            showData(response.data[i]);
        }
    })
    .catch((err)=>console.log(err));
})
