import { useParams } from 'react-router-dom';

export default function Chat() {
  const { id } = useParams();
  console.log('DENTRO DA TELA CHAT', id)
  
  return (
    <div className="chat">

    </div>
  )
}
