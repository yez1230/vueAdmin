<template>
	
  <div style="padding: 20px;">
	<!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="账号/时间" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
	<el-table
	    :data="form"
	    style="width: 100%">
	    <el-table-column
	      label="账号" width="150">
	      <template slot-scope="scope">
	        <span>{{ scope.row.account }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="时间" width="150">
	      <template slot-scope="scope">
	        <span>{{ scope.row.time }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="事件">
	      <template slot-scope="scope">
	        <span>{{ scope.row.event }}</span>
	      </template>
	    </el-table-column>
	</el-table>
  </div>
	
</template>

<script>
	export default {
		name: "user-log",
		data() {
			return {
        		dialogTableVisible: false,
        		form: []
			};
		},
		components: {
		},
	    methods: {
	    },
	    created() {
	    	let testData = [];
	    	let eventList = ['删除了一条test1的登录日志','修改了test3的登录ip','删除了test2的客户信息','新增了test5的登录日志'];
	    	for (let i = 0; i < 4; i++) {
	    		let dataObj={},index = i + 1;
	    		dataObj['account'] = 'admin';
	    		dataObj['time'] = '2018-03-23 18:30';
	    		dataObj['event'] = eventList[i];
	    		testData.push(dataObj);
	    	}
	    	this.form = testData;
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

