import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { FaTemperatureLow} from 'react-icons/fa';


import { Container, Main, Section, Footer, Input } from "./styles/styles"

export function App() {

  const [city, setCity] = useState('')
  const [forecast, setForecast] = useState('')
  const [load, setLoad] = useState(false)
  const [forecasts, setForecasts] = useState([])

  let New = 'Brasilia'

  let time = new Date().toLocaleTimeString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'


  })
  let date = new Date().toLocaleDateString('pt-br')


  const searchCity = () => {
    setLoad(true)


    fetch(`https://api.weatherapi.com/v1/forecast.json?key=62fa7e8be50c45e5bd1200853220309&q=${city}&lang=pt&days=10`)

      .then((response) => {
        return response.json()
      }

      )
      .then((city) => {
        setForecast(city)
        setForecasts(city.forecast.forecastday)



      }).catch(() => {
        alert("Erro atualize a pagina!")

      })


    setForecast('')
    setLoad(false)


  }
  useEffect(() => {
    const City = () => {
      setLoad(true)


      fetch(`https://api.weatherapi.com/v1/forecast.json?key=62fa7e8be50c45e5bd1200853220309&q=${New}&lang=pt&days=10`)

        .then((response) => {
          return response.json()
        }

        )
        .then((city) => {
          setForecast(city)
          setForecasts(city.forecast.forecastday)



        })
      setForecast('')
      setLoad(false)

    }
    City()
  }, [])
  function loadTime() {
    setLoad(true)
    setTimeout(() => searchCity(),
      1000
    )
  }
  return (

    <Container>
      <Main>
        <Input>
          <input
            type="text"
            placeholder='Buscar por uma cidade...'
            onChange={e => setCity(e.target.value)}
          />

          <button onClick={loadTime} disabled={load}>
            {load ? 'Carregando' : <BsSearch />}
          </button>
        </Input>
      </Main>
      {
        forecast ? (
          <Section>
            <img src={forecast.current.condition.icon} alt="" />
           
            <h1> {forecast.location.name} / {forecast.location.region}</h1>

            <p>{forecast.current.condition.text}</p>


            <p>Temp: {forecast.current.temp_c}°</p>

            <p>Umidade: {forecast.current.humidity}</p>

            <p>Vento: {forecast.current.wind_kph} Km/h</p>

            <p>Atualizado: {time} {date} </p>

          </Section>


        ) : null}
      <Footer >

        {forecasts.map((e, index) => {
          return (

            <article key={e.date}>
              <h2>
                {
                  index == 0 ? 'amanhã' : Intl.DateTimeFormat(
                    'pt-BR', { weekday: 'long' }
                  )
                    .format(new Date()
                      .setDate(new Date().getDate() + index + 1))
                }
              </h2>
              <p>{e.day.condition.text}</p>
              <img src={e.day.condition.icon} alt="" />
              <p>Max {e.day.maxtemp_c} <FaTemperatureLow/> </p>
              <p>Min {e.day.mintemp_c} <FaTemperatureLow/></p>
              <p>Vent {e.day.maxwind_kph}  Km/h</p>
              <p>Uv {e.day.uv}</p>

            </article>
          )
        })
        }
      </Footer>
    </Container>


  )

}