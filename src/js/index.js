// Created By Rony Wahyu Utama

"use strict"


const acc1 = {
    idNumber: 123456,
    name: "Rony Wahyu Utama",
    username: "ronywahyu",
    role: "Manager",
    password: 12345,
    basicSalary: 6000000,
    allowance: 1500000,
    cuts: 500000,
    // tunjangan 
    workHours: 600,
    attendance: 85,
    salaryClass: 4,
    jobPortions: ['Programming', 'Lead Meeting', 'Code Reviewing'],
    jobPortionsData: [50, 30, 15],
    dataPerformance: [10, 9, 7, 8, 8, 9],
    totalSalary: function () {
        return ((this.basicSalary + this.allowance) - this.cuts);
    },
    workRate: function () {
        const dataSum = this.dataPerformance.reduce((prev, curr) => prev + curr)
        const avg = dataSum / this.dataPerformance.length
        return avg
    },
}

const acc2 = {
    idNumber: 123456,
    name: "Wahyu Utama",
    username: "wahyuu",
    role: "Staff Department",
    password: 54321,
    basicSalary: 4000000,
    allowance: 1500000,
    cuts: 500000,
    workHours: 500,
    attendance: 85,
    workRate: 9,
    salaryClass: 3,
    jobPortions: ['Programming', 'Lead Meeting', 'Code Reviewing'],
    jobPortionsData: [50, 30, 15, 5],
    dataPerformance: [8, 8, 7, 8, 8, 6],
    totalSalary: function () {
        return ((this.basicSalary + this.allowance) - this.cuts);
    },
    workRate: function () {
        const dataSum = this.dataPerformance.reduce((prev, curr) => prev + curr)
        const avg = dataSum / this.dataPerformance.length
        return avg
    },

}

const acc3 = {
    idNumber: 123456,
    name: "Jon Cena",
    username: "joncena",
    role: "Staff Gudang",
    password: 11111,
    basicSalary: 3000000,
    allowance: 1500000,
    cuts: 500000,
    workHours: 450,
    attendance: 85,
    workRate: 9,
    salaryClass: 2,
    jobPortions: ['Programming', 'Lead Meeting', 'Code Reviewing', 'etc'],
    jobPortionsData: [50, 30, 15, 5],
    dataPerformance: [10, 9, 7, 8, 8, 9],
    totalSalary: function () {
        return ((this.basicSalary + this.allowance) - this.cuts);
    },
    workRate: function () {
        const dataSum = this.dataPerformance.reduce((prev, curr) => prev + curr)
        const avg = dataSum / this.dataPerformance.length
        return avg
    },
}



class App {
    constructor() {
        this.login();
        this.logout();
        // this.moreInfoProfile();
        // this.auth();
    }

    auth(username, password) {
        let currentLoggedAcc;
        const accounts = [acc1, acc2, acc3];
        // let currentLoggedAcc;
        const heroImg = document.querySelector('.hero')
        const mainApp = document.querySelector('#app')
        const loginSuccessAlert = function () {
            return Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1500
            })
        }
        const loginFailedAlert = function () {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Wrong Username or Password',
                showConfirmButton: false,
                timer: 1500
            })
        }

        currentLoggedAcc = accounts.find(account => account.username === username)

        if (currentLoggedAcc.username !== ''
            &&
            currentLoggedAcc.password !== ''
            &&
            currentLoggedAcc.username === username
            &&
            currentLoggedAcc.password === +password

        ) {
            loginSuccessAlert()
            console.log(currentLoggedAcc);
            mainApp.classList.remove('hidden')
            heroImg.classList.add('hidden');

            this.renderDataProfile(currentLoggedAcc.name, currentLoggedAcc.role, currentLoggedAcc.totalSalary())
            this.renderDataStats(currentLoggedAcc.workHours, currentLoggedAcc.attendance, currentLoggedAcc.workRate())
            this.renderPerformanceChart(currentLoggedAcc.dataPerformance)
            this.renderJobTypeChart(currentLoggedAcc.jobPortions, currentLoggedAcc.jobPortionsData)
            this.moreInfoProfile(currentLoggedAcc.idNumber, currentLoggedAcc.salaryClass, currentLoggedAcc.basicSalary, currentLoggedAcc.allowance, currentLoggedAcc.cuts)
            this.salaryCalculator()
        } else {

            loginFailedAlert()
            console.log('Salah');
        }
        return currentLoggedAcc.nama;
    }

    login() {
        const loginInput = document.querySelector(".login")
        const usernameInput = document.querySelector(".input-username")
        const passwordInput = document.querySelector('.input-password')
        loginInput.addEventListener('submit', (e) => {

            console.log(e);
            e.preventDefault()
            this.auth(usernameInput.value, passwordInput.value);
            usernameInput.value = passwordInput.value = ''

        })

    }

    logout() {
        const btn = document.querySelector('.btn-logout')
        btn.addEventListener('click', () => {
            return location.reload()
        })

    }

    moreInfoProfile(idNumber, salaryClass, BasicSalary, allowance, salaryCuts) {
        const btn = document.querySelector('.btn-info')
        btn.addEventListener('click', () => {
            Swal.fire({
                title: "<strong>Your Info</strong>",
                // icon: 'info',
                html: `
                <table>
                <tr>
                    <td>
                        <h2>ID Number</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>${idNumber}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Salary Class</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>${salaryClass}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Basic Salary</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>Rp${BasicSalary}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Allowance</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>Rp${allowance}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Salary Cuts</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>Rp${salaryCuts}</h2>
                    </td>
                </tr>
                
            </table>
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    'Okay',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    'Cancel',
                cancelButtonAriaLabel: 'Thumbs down'
            })
        })
    }

    salaryCalculator() {
        const btnCalculator = document.querySelector('.btn-calculator')
        const close = document.querySelector('.btn--close-modal')
        const btn = document.querySelector('.btn-calculate')
        const name = document.querySelector('.name-calculate')
        const cuts = Number(document.querySelector('.cuts-calculate').value)
        const salaryClass = document.querySelector('#salaryClassOptions')
        const allowance = Number(document.querySelector('.allowance-calculate').value)
        // return ((this.basicSalary + this.allowance) - this.cuts);
        const calculate = function(){
            if(salaryClass.value === 'I'){
                return 2500000
            }else if(salaryClass.value === 'II'){
                return 3000000
            }else if(salaryClass.value === 'III'){
                return 4000000
            }else if(salaryClass.value === 'IV'){
                return 6000000
            }else{
                alert('Invalid Salary')
            }
        }

        const total = function(){
            return (calculate() + allowance) - cuts;  
        }
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            Swal.fire({
                title: "<strong>Your Info</strong>",
                // icon: 'info',
                html: `
                <table>
                <tr>
                    <td>
                        <h2>Name</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>${name.value}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Salary Class</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>${salaryClass.value}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Basic Salary</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>Rp${calculate()}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Allowance</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>Rp${allowance}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Salary Cuts</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>Rp${cuts}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Total Salary</h2>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <h2>Rp${total()}</h2>
                    </td>
                </tr>
                
            </table>
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    'Okay',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    'Cancel',
                cancelButtonAriaLabel: 'Thumbs down'
            })
        })

        btnCalculator.addEventListener('click', () => {
            document.querySelector('.modal').classList.remove('hidden')
        })
        close.addEventListener('click', ()=>{
            document.querySelector('.modal').classList.add('hidden')
        })
    }

    renderDataProfile(name, role, totalSalary) {
        const workProfile = document.querySelector('.work-profile')
        const greet = document.querySelector('.welcome')

        workProfile.innerHTML = ''

        greet.innerHTML = `Hello, ${name}`
        const html = `
        <h3>Your Profile</h3>
        <div class="profile-data">
            <div class="profile-attribute profile-name">
                <img src="./src/img/name.png" alt="" />
                
                <div class="profile-text">
                    <h5>${name}</h5>
                    <p>Name</p>
                </div>
            </div>
            <div class="profile-attribute profile-manager">
                <img src="./src/img/role.png" alt="" />

                <div class="profile-text">
                    <h5>${role}</h5>
                    <p>Role</p>
                </div>
            </div>
            <div class="profile-attribute profile-salary">
                <img src="./src/img/salary.png" alt="" />

                <div class="profile-text">
                    <h5>Rp${totalSalary}</h5>
                    <p>Total Salary</p>
                </div>
            </div>
        </div>
        `

        workProfile.insertAdjacentHTML('afterbegin', html)
        return workProfile;

    }

    renderDataStats(workHours, attendance, workRate) {
        const container = document.querySelector('.work-stats-container')
        container.innerHTML = ''
        const html = `
        <div class="work-stats work-hours">
            <img
                class="work-stats-img"
                src="./src/img/hours.png"
                alt=""
            />
            <p>Work Hours</p>
            <h1 class="work-stats-data">${workHours}</h1>
            <p>Hours</p>
        </div>
        <div class="work-stats work-attendance">
            <img
                class="work-stats-img"
                src="./src/img/presensi.png"
                alt=""
            />
            <p>Attendance</p>
            <h1 class="work-stats-data">${attendance}</h1>
            <p>Percent</p>
        </div>
        <div class="work-stats work-rating">
            <img
                class="work-stats-img"
                src="./src/img/star.png"
                alt=""
            />
            <p>Work Rating</p>
            <h1 class="work-stats-data">${workRate}</h1>
            <p>From 10</p>
        </div>
        `
        container.insertAdjacentHTML('afterbegin', html)
        return container

    }

    renderPerformanceChart(dataPerformance) {
        // bar chart
        const performanceChart = document.querySelector('#performanceChart')
        performanceChart.innerHTML = ''
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];
        const data = {
            labels: months,
            datasets: [{
                label: 'Performance Rate (%)',
                data: dataPerformance,
                fill: true,
                // borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(83,138,214,1)',
                tension: 0.1
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {}
        };

        const myChart = new Chart(
            performanceChart,
            config
        );
    }

    renderJobTypeChart(jobPortions, jobPortionsData) {
        // round chart
        const workTypeChart = document.querySelector('#workType')
        const data = {
            labels: jobPortions,
            datasets: [{
                label: 'My First Dataset',
                data: jobPortionsData,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(22, 205, 106)'
                ],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
        };

        const myChart = new Chart(
            workTypeChart,
            config
        );
    }
}
const app = new App();

