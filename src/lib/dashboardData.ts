import {ApolloClient, gql, InMemoryCache} from "@apollo/client/core/core.cjs";
import {HttpLink} from "@apollo/client/link/http/http.cjs";
const HASURA_ENDPOINT = 'https://balanced-worm-42.hasura.app/v1/graphql';

const client = new ApolloClient({
    link: new HttpLink({
        uri: HASURA_ENDPOINT,
        fetch,
        headers: {
            'x-hasura-admin-secret': `k6zehZQVxNJezp2uRawU1mcNUy16MY4yG8J42iWUzpBTaVG9eIQYQLsp9VSu4QPh`
        }
    }),
    cache: new InMemoryCache(),
});

const GET_EMPLOYEES = gql`
    query Employees {
      employees {
        employee_id
        last_name
        first_name
        workinghours
        projectsassigned
      }
    }
  `;


const GET_DEPARTMENTS = gql`
    query Departments {
  departments {
    department_id
    department_name
  }
}

  `;
export const getEmployees = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const {data} = await client.query({query: GET_EMPLOYEES});
            console.log("employee" ,data)
            resolve(data.employees);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
};


export const getDepartments = () => {
  return new Promise(async (resolve, reject) => {
        try {
            const {data} = await client.query({query: GET_DEPARTMENTS});
            console.log(data)
            resolve(data.departments);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
    // return [
    //     {departmentId: '1', name: 'Engineering'},
    //     {departmentId: '2', name: 'Human Resources'},
    //     {departmentId: '3', name: 'Marketing'},
    // ];
};

//todo: fix getDepartments
