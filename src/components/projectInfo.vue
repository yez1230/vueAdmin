<template>
	
  <div style="padding: 20px;">
	  <el-form :model="form" label-width="120px" ref="form" size="mini" :inline="true">
	    <el-form-item label="客户编码" prop="customerCode">
	      <el-input v-model="form.customerCode" :disabled="form && form.id ? true : false "/>
	    </el-form-item>
	    <el-form-item label="客户名称" prop="customerName">
	      <el-input v-model="form.customerName"/>
	    </el-form-item>
	    <el-form-item label="发送地址" prop="sendURL">
	      <el-input v-model="form.sendURL"/>
	    </el-form-item>
	    <el-form-item label="日志地址" prop="logURL">
	      <el-input v-model="form.logURL"/>
	    </el-form-item>
	    <el-form-item label="测试地址" prop="testURL">
	      <el-input v-model="form.testURL"/>
	    </el-form-item>
	    <el-form-item label="验证地址" prop="checkURL">
	      <el-input v-model="form.checkURL"/>
	    </el-form-item>
	    <el-form-item label="私钥" prop="priKey">
	      <el-input v-model="form.priKey"/>
	    </el-form-item>
	    <el-form-item label="公钥" prop="pubKey">
	      <el-input v-model="form.pubKey"/>
	    </el-form-item>
	    <el-form-item label="手动更新版本" prop="handVersion">
	      <el-input v-model="form.handVersion"/>
	    </el-form-item>
	    <el-form-item label="自动更新版本" prop="autoVersion">
	      <el-input v-model="form.autoVersion"/>
	    </el-form-item>
	    <el-form-item label="临时表更新版本" prop="updateVersion">
	      <el-input v-model="form.updateVersion"/>
	    </el-form-item>
	    <el-form-item label="更新临时表" prop="updateTableFlag">
	      <el-radio-group v-model="form.updateTableFlag">
	        <el-radio :label="0">是</el-radio>
	        <el-radio :label="1">否</el-radio>
	      </el-radio-group>
	    </el-form-item>
	    <el-form-item label="运行时环境" prop="jdkType">
	      <template>
	        <el-radio-group v-model="form.jdkType">
	          <el-radio :label="0">SUN</el-radio>
	          <el-radio :label="1">IBM</el-radio>
	        </el-radio-group>
	      </template>
	    </el-form-item>
	    <el-form-item label="发送异常邮件" prop="sendEmailFlag">
	      <template>
	        <el-radio-group v-model="form.sendEmailFlag">
	          <el-radio :label="0" >是</el-radio>
	          <el-radio :label="1" >否</el-radio>
	        </el-radio-group>
	      </template>
	    </el-form-item>
	    <el-form-item label="产品类型" prop="productType">
	      <template>
	        <el-select v-model="form.productType" placeholder="请选择产品类型">
	          <el-option label="不含网销产品" value="0"></el-option>
	          <el-option label="包含网销产品" value="1"></el-option>
	        </el-select>
	      </template>
	    </el-form-item>
	    <el-form-item label="数据更新方式" prop="updatedType">
	      <el-select v-model="form.updatedType" placeholder="请选择数据更新方式">
	        <el-option label="手动式" value="0"></el-option>
	        <el-option label="自动发送【推送】" value="1"></el-option>
	        <el-option label="自动发送【拉动】" value="2"></el-option>
	      </el-select>
	    </el-form-item>
	    <el-form-item label="文件类型" prop="updateFileType">
	      <el-select v-model="form.updateFileType" placeholder="请选择数据更新方式">
	        <el-option label="XML属性式" value="0"></el-option>
	        <el-option label="ZIP格式XML属性式" value="1"></el-option>
	        <el-option label="XML节点式" value="2"></el-option>
	        <el-option label="ZIP格式XML节点式" value="3"></el-option>
	        <el-option label="SQL文件" value="4"></el-option>
	      </el-select>
	    </el-form-item>
	  </el-form>
	  <div slot="footer" style="float: right;">
	    <el-button @click="cancleDialog">取消</el-button>
	    <el-button type="primary" @click="handleSubmit">提交</el-button>
	  </div>
	
  </div>
	
</template>

<script>


	export default {
		name: "project-info",
		props:['projectList'],
		data() {
			return {
		        form:{}
			};
		},
	    methods: {
	      handleSubmit(data) {
	      	// 提交数据
	      	console.log(this.form);
	      	this.$emit('closeDialog',JSON.parse(JSON.stringify(this.form)));
	      },
	      cancleDialog() {
	        this.$emit('closeDialog','cancel');
	      }
	    }
	}

</script>

<style scoped>

</style>

