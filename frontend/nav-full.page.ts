// 请不要在此处粘贴来历不明的代码。
// 否则可能导致用户界面异常或是账户信息泄露。
// Use at your own risk.
const a = document.createElement('style');
const htmlElement = document.documentElement;
if(htmlElement.dataset.page != 'user_login') {
	a.innerHTML = `
/* Monaco suggestion items also use .main, so only target Hydro's page container. */
#panel > .main {
	background-image: url("");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
}
body .slideout-panel .main .row .section{
	background-color: rgba(255,255,255,0.8);
}
body .slideout-panel .main .row .section{
	backdrop-filter: saturate(200%) blur(30px);
}
.nav{
	background-color: rgba(255,255,255,0.8);
	backdrop-filter: blur(30px);
}
.data-table tr:nth-child(2n){
	background: none;
}
.data-table tr{
	border: none;
	background: none;
}
.page--problem_main .col--ac-tried, .page--problem_category .col--ac-tried{
	border: none;
}
thead{
	background-color: rgba(255,255,255,0.8);
	backdrop-filter: blur(30px);
}
`;
}
else {
	a.innerHTML = `
body .slideout-panel .main .row .section{
        background-color: rgba(255,255,255,0.8);
}
body .slideout-panel .main .row .section{
        backdrop-filter: saturate(200%) blur(30px);
}
.nav{
        background-color: rgba(255,255,255,0.8);
        backdrop-filter: blur(30px);
}
.data-table tr:nth-child(2n){
        background: none;
}
.data-table tr{
        border: none;
        background: none;
}
.page--problem_main .col--ac-tried, .page--problem_category .col--ac-tried{
        border: none;
}
thead{
        background-color: rgba(255,255,255,0.8);
        backdrop-filter: blur(30px);
}
`;
}
document.head.append(a);
