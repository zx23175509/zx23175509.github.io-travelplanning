Vue.createApp({
    data(){
        return{
            msg:'',//顯示列表
            travelCount:0,//行程數
            travelName:'',//標題
            startDay:'',//開始日期
            content:'',//內容
            startTime:'',// 儲存開始選項值
            endTime:'',// 儲存結束選項值
            search:'',//搜尋結果
            
        }
    },
    //預設執行
    created:function(){
        //讀取儲存資料
        if(localStorage.getItem('travelCount')!==null){
            this.travelCount = localStorage.getItem('travelCount');
        }
    },
    methods:{
        // 新增
        newT(){
            if(this.travelCount!== 0){
                let result=confirm("確定要新增一筆行程?");
                if(result){
                    this.travelCount++;
                    localStorage.setItem('travelCount',this.travelCount);
                    localStorage.setItem('travelName'+ this.travelCount ,this.travelName);
                    localStorage.setItem('startDay'+ this.travelCount ,this.startDay);
                    localStorage.setItem('content'+ this.travelCount ,this.content);
                    alert("第"+this.travelCount+"筆行程  已新增成功!");
                    this.travelName='';
                    this.startDay='';
                    this.content='';
                }   
            }
        },
        // 查看
        check(){
            this.msg= '<h3>共'+this.travelCount+'筆行程</h3>';
            
            for (let i = 1; i <= this.travelCount; i++) {
                this.msg=this.msg+"<br><div class='list-item'>"+i
                +".<h3>旅行名稱:"+localStorage.getItem("travelName"+i).replace(/\n/g, "<br>")
                +"</h3><br><h4>日期:"+localStorage.getItem("startDay"+i).replace(/\n/g, "<br>")
                +"<h4><br><br><h4>規劃:<br>"+localStorage.getItem("content"+i).replace(/\n/g, "<br>")+'</h4><br></div>';
            }
            if(this.travelCount == 0){
                alert("目前還沒建立旅遊行程 請新增一筆行程");
            }
            
            //移動到list列表
            // this.$refs.list.scrollIntoView({ behavior: 'smooth' });
            list.scrollIntoView({ behavior: 'smooth' });  
        },
        //選取
        edit(){
            if(this.travelCount==0){
                alert("目前還沒建立旅遊行程 無法選取 請新增一個行程");
            }
            else{
                let number=prompt('請輸入旅程編號:',1);
                if(!isNaN(parseInt(number))&& parseInt(number)<= this.travelCount && parseInt(number)>0){
                    this.travelName=localStorage.getItem('travelName'+number);
                    this.startDay=localStorage.getItem('startDay'+number);
                    this.content=localStorage.getItem('content'+number);
                    
                    this.msg="<br><div class='list-item'>"+number
                    +".<h3>旅行名稱:"+localStorage.getItem("travelName"+number).replace(/\n/g, "<br>")
                    +"</h3><br><h4>日期:"+localStorage.getItem("startDay"+number).replace(/\n/g, "<br>")
                    +"<h4><br><br><h4>規劃:<br>"+localStorage.getItem("content"+number).replace(/\n/g, "<br>")+'</h4><br></div>';
                }
            }
        },
        //編輯
        edit1(){
            if(this.travelCount==0){
                alert("目前還沒建立旅遊行程 無法編輯 請新增一個行程")
            }
            else{
                let number=prompt('請輸入要編輯的旅程編號:',1);
                
                //判斷是否輸入正確
                if (!isNaN(parseInt(number))&& parseInt(number)<= this.travelCount && parseInt(number)>0) {
                    var result = confirm("請問確定要將當前內容編輯到選擇的編號?");
                    if (result) {
                        localStorage.setItem('travelName'+ number ,this.travelName);
                        localStorage.setItem('startDay'+ number ,this.startDay);
                        localStorage.setItem('content'+ number ,this.content);
                        this.msg= '';
                        this.travelName='';
                        this.startDay='';
                        this.content='';
                        alert("已修改第"+number+"筆資料");
                    }     
                }
                else if(parseInt(number)> this.travelCount){
                    alert("編號不存在");
                }
            }
        },
        //刪除
        delT(){
            if(this.travelCount==0){
                alert("目前還沒建立旅遊行程 無法刪除 請新增一個行程")
            }
            else{
                let number=prompt('請輸入要刪除的旅程編號:',1);
                if (!isNaN(parseInt(number))&& parseInt(number)<= this.travelCount && parseInt(number)>0){
                    localStorage.removeItem('travelName'+ number);
                    localStorage.removeItem('startDay'+ number);
                    localStorage.removeItem('content'+ number);
                    //資料往前一個移動
                    for (let i = Number(number); i <= this.travelCount;i++){
                        localStorage.setItem('travelName'+ i, localStorage.getItem('travelName'+ (i+1)));
                        localStorage.setItem('startDay'+ i, localStorage.getItem('startDay'+ (i+1)));
                        localStorage.setItem('content'+ i, localStorage.getItem('content'+ (i+1)));
                        
                        localStorage.removeItem('travelName'+ (i+1));
                        localStorage.removeItem('startDay'+ (i+1));
                        localStorage.removeItem('content'+ (i+1));
                    }    
                    this.travelCount--;
                    localStorage.setItem('travelCount',this.travelCount);
                    if(this.travelCount==0) localStorage.clear();
                    alert("已刪除第"+number+"筆資料");
                    
                }
                this.msg= '';
                this.travelName='';
                this.startDay='';
                this.content='';
            }
        },
        //全刪
        delAT(){
            if(this.travelCount==0){
                alert("目前還沒建立旅遊行程 無法刪除 請新增一個行程")
            }
            else{
                let result = confirm("確定要將全部行程刪除?");
                if (result) {
                    localStorage.clear();
                    this.msg= '';
                    this.travelName='';
                    this.startDay='';
                    this.content='';
                    this.travelCount=0;
                    alert("所有行程刪除成功!");
                } 
            } 
        },
        //資訊
        info(){
            if(this.travelCount==0){
                alert("目前有"+this.travelCount+"筆行程 可以新增行程喔!");
            }
            else alert("目前有"+this.travelCount+"筆行程");
            
        },
        //清空欄位
        clear(){
            this.travelName='';
            this.startDay='';
            this.content='';
        },
        // 時程表
        setTime(){
            this.content='';
            let start = parseInt(this.startTime); 
            let end = parseInt(this.endTime);
            //判斷開始不小於結束時的動作
            if (start < end){
                for (let i = start; i <= end; i++) {
                    if (i == 24) {
                        this.content = this.content + '00:00 \n\n';
                    } else {
                        this.content = this.content + (i < 10 ? '0' + i : i) + ':00 \n\n';
                    }
                }
            }  
        },
        //時程範圍
        setRange(){
            //插入文本
            let start = parseInt(this.startTime); 
            let end = parseInt(this.endTime);
            if (start < end){
                if(start<10)start='0'+start;
                if(end<10)end='0'+end;
                let range= start+ ':00 ~ '+end+ ':00 \n';
                this.content=this.content+range;
            }
        },
        //搜尋
        handleInput(){
            //搜尋名稱
            for(let i =1;i<=this.travelCount;i++){
                if(this.search == localStorage.getItem("travelName"+i)){
                    this.msg="<br><div class='list-item'>"+i
                    +".<h3>旅行名稱:"+localStorage.getItem("travelName"+i).replace(/\n/g, "<br>")
                    +"</h3><br><h4>日期:"+localStorage.getItem("startDay"+i).replace(/\n/g, "<br>")
                    +"<h4><br><br><h4>規劃:<br>"+localStorage.getItem("content"+i).replace(/\n/g, "<br>")+'</h4><br></div>';
                }
            }
            //搜尋編號
            this.msg="<br><div class='list-item'>"+this.search
            +".<h3>旅行名稱:"+localStorage.getItem("travelName"+this.search).replace(/\n/g, "<br>")
            +"</h3><br><h4>日期:"+localStorage.getItem("startDay"+this.search).replace(/\n/g, "<br>")
            +"<h4><br><br><h4>規劃:<br>"+localStorage.getItem("content"+this.search).replace(/\n/g, "<br>")+'</h4><br></div>';
        },
    }

}).mount("#app");