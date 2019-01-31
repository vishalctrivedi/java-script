/***********************************************************
 *
 * Execution     :Default node      cmd>node filename.js
 * Purpose       :To deploy all the business logic.
 * 
 *@description 
 * 
 *
 *@file          :UtilDataStructures.js
 *@overview      :All the business logic are coded here.
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :31/01/2019
 * 
 ***********************************************************/



class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}



class LinkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;

    }


    add(data)
    {
        var node=new Node(data);
        if(this.head==null)
        {
            this.head=node;
            this.size++;
        }
        else
        {
            var temp=this.head;
            while(temp.next)
            {
                temp=temp.next;
            }
            temp.next=node;
            this.size++
        }
    }   


   print()
    {
        var str="";
        var temp=this.head;
        while(temp)
        {
            str=str+" "+temp.data;
            temp=temp.next;
        }
        console.log(str);
    }



    getSize()
    {
        return this.size;
    }













}



module.exports={Node,LinkedList};
