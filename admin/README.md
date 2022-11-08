# Pharmacy Management App
Admin is responsible for adding new pharmacists, medical companies, and medicines. He can also view stock reports, sales reports, and sale reports by individual pharmacists. He can view total pharmacists, medical companies, medicines, total sale, and the line chart where sale for each day is displayed. Admin can view all the orders and search invoice with each individual order invoice number. Once he searched for order with it's invoice number, he see that order details like customer that's made the order and all the medicines he's ordered. Admin can print and also download the invoice.

## Technologies used:
- React
- Redux-Toolkit
- Redux-Persist
- React-Redux
- Typescript
- Styled-Components


## Features:

### Login
1. Admin submits his credentials
   1. If he's authenticated the server sends back token and authentication credentials
   2. Else authentication fails like non-admin user tries to login then You're not admin message is displayed in the UI
   3. Or if admin or non-admin user makes more than 3 unsuccessfull login attempts, then he's disabled to login for until another 1 hour
   4. Else authentication successful then admin can access the app
   

### Dashboard
- In dashboard admin can view total pharmacists, medical companies, medicines, total sales, and line chart where sales for each displayed

### Invoice Search
1. Admin submits an invoice number
   1. If the invoice number is invalid, apropriate error message is displayed in the UI, indicating what went wrong
   2. Else the invoice number is valid, then order with that invoice number is displayed
   3. Found invoice can then be downloaded, or printed out

### Medicine Inventory
- Admin can view all the medicines that've been created so far, medicines are displayed 5 per page by default but admin can change it to display 10, 25, 50, 75 or 100 medicines per page. Admin can also move to different pages to view other medicines using pagination

### Orders
- Admin sees list of table items on each row containing customer name, mobile number, his payment type, and the order invoice number. orders are displayed 10 per page by default but admin can change it to display 10, 25, 50, 75 or 100 medicines per page. Admin can also move to different pages to view other medicines using pagination

### Add Medical Company
1. Admin submits the new medical company name and it's validated
   1. If it's invalid, like name is greater or smaller allowed name length then corresponding error message is displayed in the UI
   2. Else if it's valid then new company is created and admin is redirected to the table of medical companies

### Manage Medical Company
- Admin sees table of medical companies and edit button to edit each individual company.
- Medical companies  are displayed per page is 5 by default but it can be changed to 10, 25, 50, 75, or 100 per page. 
- Admin can also move to different pages using pagination to see different medical companies on that page

### Edit Medical Company
1. Admin changes to current medical company that he is editing and submits it
   1. If it's invalid, like name is greater or smaller allowed name  length then corresponding error message is displayed in the UI
   2. Else if it's valid then the company is edited and admin is redirected to the table of medical companies

### Add Medicine
1. Admin submits all the new medine data and it's validated
   1. If it's invalid,  then corresponding error message is displayed in the UI
   2. Else if it's valid then new medicine is created and admin is redirected to the table of medicines

### Manage Medicine
- Admin sees table of medicines and edit button to edit each individual medicine.
- Medicines are displayed per page is 5 by default but it can be changed to 10, 25, 50, 75, or 100 per page. 
- Admin can also move to different pages using pagination to see different medicines on that page

### Edit Medicine
1. Admin changes to current medicine that he is editing and submits it
   1. If it's invalid, then corresponding error message is displayed in the UI
   2. Else if it's valid then the medicine is edited and admin is redirected to the table of medicine


### Add Pharmacist
1. Admin submits all the new pharmacist data and it's validated
   1. If it's invalid,  then corresponding error message is displayed in the UI
   2. Else if it's valid then new pharmacist is created and admin is redirected to the table of pharmacists

### Manage Pharmacist
- Admin sees table of pharmacist and edit button to edit each individual pharmacist.
- Pharmacists are displayed per page is 5 by default but it can be changed to 10, 25, 50, 75, or 100 per page. 
- Admin can also move to different pages using pagination to see different pharmacists on that page

### Edit Pharmacist
- Admin sees table of pharmacists and edit button to edit each individual medicine.
- Pharmacists are displayed per page is 5 by default but it can be changed to 10, 25, 50, 75, or 100 per page. 
- Admin can also move to different pages using pagination to see different pharmacists on that page


### Stock Reports
1. Admin submits 2 dates to view stock reports between those 2 dates
    1. If data is invalid then erorr message is displayed in the UI
    2. Else if data is valid 
       1. Then all of medicines that  are added between those 2 dates are displayed
       2. Else informative message to indicate no medicine's been added between those 2 dates are displayed

### Pharmacist Sales Reports
1. Admin submits 2 dates to view sale reports by the given pharmacist between those 2 dates
    1. If data is invalid then erorr message is displayed in the UI
    2. Else if data is valid 
       1. Then all of sales that pharmacist's made  between those 2 dates are displayed
       2. Else informative message to indicate pharmacist's not made any sales between those 2 dates are displayed

### Sales Reports
1. Admin submits 2 dates to view sale reports by between those 2 dates
    1. If data is invalid then erorr message is displayed in the UI
    2. Else if data is valid 
       1. Then all of the sales that's been made between those 2 dates are displayed
       2. Else informative message to indicate no sales's been mades between those 2 dates are displayed

### Change Profile
1. Admin submits his profile data to edit
   1. If data is invliad then erorr message is displayed in the UI
   2. Else if data is valid then message to indicate his profile changed is displayed in the UI

### Change Password
1. Admin submits his password data to edit
   1. If data is invliad then erorr message is displayed in the UI
   2. Else if data is valid then message to indicate his password changed is displayed in the UI