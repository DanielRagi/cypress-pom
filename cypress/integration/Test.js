import LoginPage from './PageObjects/Login';
import DashboardPage from './PageObjects/Dashboard';
import AddEmployeePage from './PageObjects/AddEmployee';
import EmployeeDetailsPage from './PageObjects/EmployeeDetails';
import EmployeeListPage from './PageObjects/EmployeeList';

describe('Test cases', () => {

    var name, 
        lastname, 
        employeeId, 
        gender, 
        nationality, 
        nick, 
        marital, 
        birth;

    // Antes de iniciar la ejecución de los casos de prueba realiza limpieza de cookies (para evitar
    // problemas en nuevas sesiones al re-ejecutarlos) y luego visita el sitio.
    before( () => {
        cy.clearCookies();
        cy.visit('https://opensource-demo.orangehrmlive.com');
    })

    // Antes de cada caso de prueba garantiza mantener las cookies almacenadas para evitar cierres
    // de sesión al recargar páginas.
    beforeEach( () => {
        Cypress.Cookies.preserveOnce('PHPSESSID', 'Loggedin');
    })

    // Ingresa al aplicativo con los datos por defecto y verifica que se haya iniciado sesión
    // buscando la existencia del mensaje de bienvenida.
    it('Login', () => {
        var username = "Admin";
        var password = "admin123";
        LoginPage.login(username, password);
        cy.get('#welcome').should('to.exist');
    })

    // Navega hacia la sección de añadir empleado y le asigna nombre y apellido generado aleatoriamente.
    it('Add Employee', () => {
        DashboardPage.goToAddEmployee();
        name = Math.random().toString(36).substring(7);
        lastname = Math.random().toString(36).substring(7);
        AddEmployeePage.createEmployee(name, lastname);
    })

    //  Realiza la edición de la información del empleado para añadir información correspondiente a:
    // género, nacionalidad, nick, estado marital y fecha de nacimiento.
    it('Edit Employee', () => {
        gender = 'M';
        nationality = 'Colombian';
        nick = Math.random().toString(36).substring(7);
        marital = 'Single';
        birth = '1997-11-16';
        EmployeeDetailsPage.editEmployee(gender, nationality, nick, marital, birth);
    })

    // Navega hacia la lista de empleados, realiza la búsqueda por el ID y verifica que el resultado
    // mostrado en la tabla coincida con los datos ingresados al añadirlo. Luego avanza hacia los detalles.
    it('Search Employee', () => {
        employeeId = AddEmployeePage.getEmployeeId();
        EmployeeDetailsPage.employeeListClick();
        EmployeeListPage.searchEmployee(employeeId);
        EmployeeListPage.validateEmployeeId(employeeId);
        EmployeeListPage.validateEmployeeName(name);
        EmployeeListPage.validateEmployeeLastname(lastname);
        EmployeeListPage.goToDetails();
    })

    // Verifica que la información correspondiente al empleado coincida con la ingresada al momento de
    // registrarlo y editarlo.
    it('Check values', () => {
        EmployeeDetailsPage.validateEmployeeId(employeeId);
        EmployeeDetailsPage.validateEmployeeName(name);
        EmployeeDetailsPage.validateEmployeeLastname(lastname);
        EmployeeDetailsPage.validateEmployeeBirth(birth);
        EmployeeDetailsPage.validateEmployeeNationality(41);
        EmployeeDetailsPage.validateEmployeeMarital(marital);
        EmployeeDetailsPage.validateEmployeeGender(gender);
        EmployeeDetailsPage.validateEmployeeNick(nick);
    })

})