var nodes = [{
    name: "父节点1",
    children: [{
        name: "子节点1",
        children: [{
        name: "子节点6"
    },
    {
        name: "子节点7"
    }]
    },
    {
        name: "子节点2"
    }]
},
{
    name: "父节点2",
    children: [{
        name: "子节点3"
    },
    {
        name: "子节点4",
        children: [{
            name: "子节点5"
        }]
    }]
}];
function createNode(node){
    console.log(node.length);
    var ul=document.createElement('ul');
    for(var i=0;i<node.length;i++){
        var li=document.createElement('li');
        console.log(li)
        if(node[i].children==undefined){
            li.innerText=node[i].name+'-没有子节点';
            console.log(node[i].name)
        }else{
            li.innerText=node[i].name+'-折叠';
            li.appendChild(createNode(node[i].children));
            console.log(li)
        }
        ul.appendChild(li);
    }
   return ul;
}
document.body.appendChild(createNode(nodes))
console.log(createNode(nodes));
document.getElementsByTagName('ul')[0].onclick=function(e){
    console.log(e.target);
    if(e.target.children.length==0){
        return;
    }
    if(e.target.nodeName=='LI'){
        if(e.target.getAttribute('open')=='false'||e.target.getAttribute('open')==undefined){
          e.target.setAttribute('open','true');
          e.target.children[0].style.display='block';
        }else{
          e.target.setAttribute('open','false');
          e.target.children[0].style.display='none';
        }
    }
}
