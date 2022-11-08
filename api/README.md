# Pharmacy Management App API

PHM is the app which consists of 2 parts, the admin and the pharmacist. The Admin can do followings. Add new medicines, new medical companies, and new pharmacists. He can also view overall sale reports by all the pharmacists between the given dates. He can also individually see each pharmacist's sale report between two dates. He can also check stocks reports between 2 dates. The Pharmacists, add new madicines to the cart and makes order by filling the custoemr name, phone number, and his payment type. All those orders appear on both pharmacist and the admin. Invoice is generated for each order and it can be both printed and downloaded.  


## Tools used
- Node.js
- Express
- Mongoose
- Typescript
- Jsonwebtoken
- Bcrypt
  

## Features:

### Login
1. Admin submits login credentials
2. Server authenticates the credentials
  1. If authentication fails via email does not exist or password is incorrect,
    - Failure message is sent to the user 
  2. Else token is generated with authenticated user info and sent back


### Create Pharmacist
1. Admin submits pharmacist data
2. Pharmacist data is validated against
   1. If data is valid then new pharmacist is created
   2. Else data is invalid like pharmacist fullname or username etc.. is missing then validation error messages are sent back

### Edit Pharmacist
1. Admin submits pharmacist data to edit
2. Pharmacist is searched against the database by his id
   1. If he is found then data is stored in the variable for editing
   2. Else error message is generated sent back to the admin which is displayed in the UI
3. Pharmacist data is validated against
   1. If data is valid then pharmacist data is edited
   2. Else data is invalid error is generated sent back

### Create Company
1. Admin submits medical company data
2. Company data is validated against
   1. If data is valid then new medical company is created
   2. Else data is invalid like medical company name length is smaller or greater than the required amount then validation error messages are sent back

### Edit Company
1. Admin submits medical company data to edit
2. Company data is validated against
   1. If data is valid then new medical company is edited
   2. Else data is invalid like medical company name length is smaller or greater than the required amount then validation error messages are sent back


### Create Medicine
1. Admin submits medicine data
2. Medicine data is validated against
   1. If data is valid then new medicine is created
   2. Else data is invalid like medicine name or medical company name is missing then validation error messages are sent back


### Edit Medicine
1. Admin submits medicine data to edit
2. Medicine data is validated against
   1. If data is valid then medicine is edited with the admin sent data
   2. Else data is invalid error message is generated sent back


### Invoice Search
1. Admin or Pharmacist submits the invoice number
2. Invoice number is searched against all the orders where it's invoice number is tored
   1. If it's found then it's returned back to the user
   2. Else some error occurs while looking for it then error message is sent back



### Stock Reports
1. Admin submits data for stock reports for 2 dates
2. All the medicines that are added between these 2 dates are searched against
   1. All the found medicines that are added between these two dates are returned back
   2. If no medicine is found then empty array is returned
   3. Or if some error occurs while searching medicines then error is generated and sent back


### Sale Reports
1. Admin submits data for sale reports between 2 dates
2. All the orders that've been made between these 2 dates are looked up on the database
   1. All the found orders that've been made between these two dates are returned back
   2. If no order's been made between 2 dates then empty array is returned
   3. Or if some error occurs while searching orders then error is generated and sent back

### Pharmacy Sale Reports
1. Admin submits data for pharmacist sale reports between 2 dates
2. Pharmacist is looked up on the database by his id and once found stored in for later returning his sales reports
3. All the orders that 've been made by pharmacist between  these 2 dates are looked up on the database
   1. All the found orders that've been made by pharmacist between  these two dates are returned back
   2. If no order's been made by pharmacist between  2 dates then empty array is returned
   3. Or if some error occurs while searching orders then error is generated and sent back

### Change Profile
1. Admin submits his profile data to edit
2. His data validated against
   1. If data is valid then his profile info like email, username, fullname is changed
   2. Else some error occurs while editing his profile then apropriate error message is sent back


### Change Password
1. Admin submits his password data to edit
2. His data validated against
   1. If data is valid then his password info like current password is changed to new password
   2. Else some error occurs while editing his password then apropriate error message is sent back
