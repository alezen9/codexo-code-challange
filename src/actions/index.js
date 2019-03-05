// actions
export function setLogged(val) {
    return {
        type: 'SET_LOGGED',
        payload: { logged: val }
    }
}

export function setCompany(company){
    return {
        type: 'SET_COMPANY',
        payload: {
            name: company.name,
            adress: company.adress,
            revenue: company.revenue,
            phone: company.phone,
            totalEmployees: company.totalEmployees,
            employees: company.employees
        }
    }
}

export function createCompany(company){
    return {
        type: 'CREATE_COMPANY',
        payload: {
            name: company.name,
            adress: company.adress,
            revenue: company.revenue,
            phone: company.phone,
            totalEmployees: 0,
            employees: []
        }
    }
}

export function updateCompany(company){
    return {
        type: 'UPDATE_COMPANY',
        payload: {
            company: company
        }
    }
}

export function unsetUser() {
    return {
        type: 'UNSET_USER'
    }
}