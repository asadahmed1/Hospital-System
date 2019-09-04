# Hospital Management
# for signup of doctor and dispenser both have assigned their role accordingly
Post:localhost:5000/signup
{
	"UserRoll":"Dispencer",
	"name":"asad",
	"email":"asad@gmail.com",
	"password":"asad"
}

### Login
Post: localhost:5000/api/login

{
		"email":"asad@gmail.com",
	"password":"asad"
}

### Issue the token
Post: localhost:5000/api/tokenIssuedData
{
    "patientname":"name of patient"
}

### Dispenser Id
get data for respective dispenser
Post: localhost:5000/api/DispancerID
{
    "RoleId":"Pass id here"
}
### By month get record
Post: localhost:5000/api/ByMonth
{
    "enterdate":Enter month from 1 to 12(mm)
}

### By year get record
Post: localhost:5000/api/ByYear
{
    "enterdate":Enter year (yyyy)
}
### Between two dates
Post: localhost:5000/api/FindByBetweenDate
{
    "startdate":from date(yyyy-mm-dd)
    "enddate":  to date(yyyy-mm-dd)
}

### get data for patient
Post: localhost:5000/api/ByPtName
{"p_name":"patient name"
}
