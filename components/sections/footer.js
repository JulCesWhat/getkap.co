import Section from '../section'
import Grid, { Column } from '../grid'
import Confetti from 'react-dom-confetti'
const Input = ({ sent }) => (
  <div className="container">
    <input type="email" name="EMAIL" placeholder="Email address" />
    <button>
      <img src="/static/images/arrow-right-white.svg" />
      <Confetti
        active={sent}
        config={{
          angle: 270,
          spread: 291,
          startVelocity: 25,
          elementCount: 28,
          decay: 0.89
        }}
      />
    </button>
    <style jsx>{`
      .container {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
      }
      input {
        flex: 1;
        padding: 0 0 0 16px;
        border: none;
        height: 100%;
        background: transparent;
        font-size: 14px;
        box-shadow: none;
        appearance: none;
        display: inline-block;
        color: #808080;

        border-radius: 4px 0px 0 4px;
        background-color: #ffffff;
        border: solid 2px #cccccc;
        border-right: none;
      }
      input:focus {
        color: #000;
        border-color: #7146fe;
      }
      button {
        width: 48px;
        height: 48px;
        background-color: #7146fe;
        border: none;
        border-radius: 0px 4px 4px 0px;
      }
      button:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
)

const Links = () => (
  <ul>
    <li>
      <a href="https://github.com/wulkano/kap/releases/download/v2.0.0/Kap-2.0.0.dmg">
        Download
      </a>
    </li>
    <li>
      <a href="https://github.com/wulkano/kap/issues">Issues</a>
    </li>
    <li>
      <a href="https://github.com/wulkano/kap/blob/master/LICENSE">License</a>
    </li>
    <style jsx>{`
      a {
        width: 74px;
        height: 24px;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #7146fe;
      }

      a:hover {
        text-decoration: underline;
      }

      li {
        margin-bottom: 12px;
      }
    `}</style>
  </ul>
)

const WulkanoAndFriends = () => (
  <div className="container">
    <a href="https://wulkano.com">
      <img src="/static/images/logos/wulkano.svg" />
    </a>
    <div className="spacer" />
    <a className="friends" href="https://github.com/wulkano/kap/contributors">
      & friends
    </a>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        max-width: 152px;
        margin-top: -1.6rem;
      }

      .spacer {
        flex: 1;
      }

      img {
      }

      a {
        color: #000;
        font-size: 1.6rem;
        font-weight: normal;
      }
      a.friends:hover {
        color: #7146fe;
        ${`cursor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCIgc3R5bGU9ImZvbnQtc2l6ZToxNHB4Ij48dGV4dCB5PSIxNiI+4p2k77iPPC90ZXh0Pjwvc3ZnPg==),auto!important;`};
      }
    `}</style>
  </div>
)

class EmailForm extends React.Component {
  state = { sent: false }
  render() {
    const { sent } = this.state
    return (
      <form
        onSubmit={() => this.setState({ sent: true })}
        action="https://getkap.us14.list-manage.com/subscribe/post?u=318c21d4f80a3b46f22ad6ddd&amp;id=f219da06bd"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <p>Sign up for updates</p>
        <div>
          <Input sent={sent} />
          <input
            style={{ position: 'absolute', left: '-59999px' }}
            type="text"
            name="b_318c21d4f80a3b46f22ad6ddd_f219da06bd"
            tabIndex="-1"
            value=""
          />
        </div>
        <style jsx>{`
          p {
            font-size: 1.6rem;
            font-weight: normal;
            margin-bottom: 24px;
          }
          button {
            width: 48px;
            height: 48px;
            background-color: #7146fe;
          }
        `}</style>
      </form>
    )
  }
}
export default () => (
  <Section>
    <Grid>
      <Column>
        <WulkanoAndFriends />
      </Column>
      <Column>
        <Links />
      </Column>
      <Column>
        <EmailForm />
      </Column>
    </Grid>
  </Section>
)
