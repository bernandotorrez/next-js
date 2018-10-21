import Layout from '../components/layout'
import axios from 'axios'
import fetch from 'isomorphic-unfetch'

async function getData() {
		try {

      	const response = await fetch(`http://localhost:3001/api/logins`);
    	const json = await response.json();
    	this.setState({ 
    		login_data: json,
    		is_loaded: true
    		 });

		} catch (error) {
			console.log(error)
		}
	}

const Index = (props) => (
	<div>
	<Layout>
	Index

	<ul>
          {props.login_data.map(data => (
            <li key={data.no_hp}>
              {data.no_hp} - {data.level}
            </li>
          ))}
        </ul>
	
	</Layout>
	</div>
)

Index.getInitialProps = async function() {
	try {

  const res = await fetch('http://localhost:3001/api/logins')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    login_data: data
  }
	} catch (error) {
		console.log(error)
	}
}

export default Index