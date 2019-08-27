<template>
	<el-container>
		<el-header></el-header>
		<el-main>
			<el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
				<h1>欢迎登录</h1>
				<el-form-item label="用户名" prop="username">
					<el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login">登录</el-button>
				</el-form-item>
			</el-form>
		</el-main>
		<el-footer></el-footer>
	</el-container>

</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				// 表单验证，需要在 el-form-item 元素中增加 prop 属性
				rules: {
					username: [{
						required: true,
						message: '账号不可为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不可为空',
						trigger: 'blur'
					}]
				},
			}
		},
		methods: {
			login() {
				console.log(this.form.username)
				this.$axios({
					method: 'post',
					url: '/login',
					data: { //这里是发送给后台的数据
						username: this.form.username,
						password: this.form.password,
					}
				}).then((response) => { //这里使用了ES6的语法
					if (response.status == 200) {
						var data = response.data;
						if (data.status == 200) {
							this.$store.dispatch('setAuthorization', data.data)
							this.$router.push("/home")
						} else {
							this.$message({
								showClose: true,
								message: data.message,
								type: 'warning'
							});
						}
					} else {
						this.$message({
							showClose: true,
							message: response.statusText,
							type: 'error'
						});
					}
				}).catch((error) => {
					this.$message({
						showClose: true,
						message: error.message,
						type: 'error'
					});
				})
			}
		}
	}
</script>

<style>
	.login-box {
		border: 1px solid #DCDFE6;
		margin: 0 auto;
		border-radius: 5px;
		width: 30%;
		padding: 15px;
	}
</style>
