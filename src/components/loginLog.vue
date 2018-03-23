<template>
	
  <div style="padding: 20px;">
		<el-table
		    :data="loginLogList"
		    style="width: 100%">
		    <el-table-column
		      label="登录账号">
		      <template slot-scope="scope">
		        <span>{{scope.row.account}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="登录人姓名">
		      <template slot-scope="scope">
		        <span>{{ scope.row.user_name }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="登录ip">
		      <template slot-scope="scope">
		        <span>{{scope.row.login_ip}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="登录时间">
		      <template slot-scope="scope">
		        <span>{{scope.row.login_time}}</span>
		      </template>
		    </el-table-column>
		</el-table>
		<el-col :span="24" class="toolbar">
	      <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :page-sizes="[5, 10, 20, 50]"
		      :page-size="10"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
		  </el-pagination>
	    </el-col>
  </div>
	
</template>

<script>
	export default {
		name: "login-log",
		data() {
			return {
        		total: 0,
        		allData:[],
        		currentPage:1,
        		pageSize: 10,
        		loginLogList:[]
			};
		},
		components: {},
	    methods: {
	      handleCurrentChange(val) {
	      	this.currentPage = val;
	      	this.loginLogList = this.allData.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage);
	      },
	      handleSizeChange(val) {
	      	this.pageSize = val;
	      	this.loginLogList = this.allData.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage);
	      }
	    },
	    created() {
	    	let testData = [];
	    	for (let i = 0; i < 50; i++) {
	    		let dataObj={},index = i + 1;
	    		dataObj['account'] = 'test' + index;
	    		dataObj['user_name'] = '测试' + index;
	    		dataObj['login_ip'] = index + '.' + index + '.' + index + '.' + index;
	    		dataObj['login_time'] = '2018-3-22 17:' + (index<10?'0'+index:index);
	    		testData.push(dataObj);
	    	}
	    	this.allData = testData;
	    	this.loginLogList = this.allData.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage);
	    	this.total = testData.length;
	    }
	}

</script>

<style scoped>
	.el-checkbox{font-weight: 400;}
	.toolbar {
	    background: #f2f2f2;
	    padding: 10px;
	    margin: 10px 0;
	}
	.el-form-item {
      margin-bottom: 10px;
    }
</style>

