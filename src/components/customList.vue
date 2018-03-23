<template>
	
  <div style="padding: 20px;">
  	<!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="客户名称/编码条件" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="addNewProject" icon="el-icon-plus">添加</el-button>
        </el-form-item>
      </el-form>
    </el-col>
	<el-table :data="rows" style="width: 100%;overflow: auto;" stripe border highlight-current-row size="mini">
      <el-table-column label="客户编码" min-width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.customerCode }}</span>
        </template>
      </el-table-column>
      <el-table-column label="客户名称" min-width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.customerName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="临时表版本号" min-width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.updateVersion }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手动发布版本号" min-width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.handVersion }}</span>
        </template>
      </el-table-column>
      <el-table-column label="自动更新版本号" min-width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.autoVersion }}</span>
        </template>
      </el-table-column>
      <el-table-column label="更新临时表" width="100">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.updateTableFlag"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="发送方式" min-width="140">
        <template slot-scope="scope">
          <span >{{ scope.row.updatedType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮件通知" width="80">
        <template slot-scope="scope">
          <el-switch on-text="" off-text="" v-model="scope.row.sendEmailFlag"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="171">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i>编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
	<el-dialog title="项目信息" :visible.sync="dialogTableVisible" @close="dialogClose" :modal-append-to-body="false" :width="'80%'">
	  <projectInfo @closeDialog="successClose"></projectInfo>
	</el-dialog>
  </div>
	
</template>

<script>

	import projectInfo from './projectInfo'

	export default {
		name: "custom-list",
		data() {
			return {
		        dialogTableVisible: false,
		        innerVisible: false,
		        rows:[]
			};
		},
		components: {
			projectInfo
		},
	    methods: {
	      handleEdit(index, row) {

	      },
	      handleDelete(index, row) {
	        this.$confirm('此操作将永久删除该项目, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	        	
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
	      },
	      addNewProject() {
	      	this.dialogTableVisible = true;
	        // this.$store.state.leftNav = false;
	        this.$emit('leftMenuStatus',false);
	      },
	      dialogClose() {
	        // this.$store.state.leftNav = true;
	        this.$emit('leftMenuStatus',true);
	      },
	      successClose(data) {
	      	console.log(data);
	      	this.dialogTableVisible = false;
	      	if (data != "cancel") {
	      		this.rows.push(data);
	      	}
	      }
	    },
	    created() {
	    	//这里可以请求后端数据，然后进行渲染
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

