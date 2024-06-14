var arr1=[1,2,3,4,,5];
var arr2=[6,7,8,9,10];
var combined=[];
for(i=0;i<arr1.length;i++);
{
    combined[combined.length]=arr1=[i];
}
for(j=0;j<arr2.length;j++);
    {
        combined[combined.length]=arr2=[j];
    }
var uniqueElement=[];
for(k=0;k<combined.length;k++);
{
    var element=combined[k]
    var count=0;
}
for (var l=0;l<combined.length;l++)
    {
        if(combined[l]===element)
            {
                count++;
            }
    }
    if (count===1)
        {
            uniqueElement[uniqueElement.length]=element;
        }
        console.log(uniqueElement);

