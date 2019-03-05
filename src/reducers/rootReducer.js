import db from '../db';

const initState = {
    logged: true,
    username: 'aleksGj',
    password: '1234',
    companies: [...db.companies] // se non si vogliono le aziende del file db.js basta mettere qui []

}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_LOGGED':
            return {
                ...state,
                logged: action.payload.logged
            }
        case 'UNSET_USER':
            return {
                ...state,
                logged: false,
                companies: [...db.companies], // se si vuole ripartire proprio da 0 mettere []
                currentCompany: {}
            }
        case 'CREATE_COMPANY':
            return {
                ...state,
                companies: [
                    {
                        name: action.payload.name,
                        adress: action.payload.adress,
                        revenue: action.payload.revenue,
                        phone: action.payload.phone,
                        totalEmployees: action.payload.totalEmployees,
                        employees: action.payload.employees
                    },
                    ...state.companies
                ]
            }
        case 'UPDATE_COMPANY':
            return {
                ...state,
                companies:
                    state.companies.map(el => {
                        return el !== action.payload.company.name ? el : action.payload.company
                    })
            }
        case 'SET_COMPANY':
            return {
                ...state,
                currentCompany: {
                    name: action.payload.name,
                    adress: action.payload.adress,
                    revenue: action.payload.revenue,
                    phone: action.payload.phone,
                    totalEmployees: action.payload.totalEmployees,
                    employees: action.payload.employees
                }
            }
        default:
            return state;
    }
}

export default rootReducer;