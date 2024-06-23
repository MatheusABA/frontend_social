import { React, useState, useEffect } from 'react';
import '../style.css'; // Nome do arquivo CSS que você criará para estilizar esta página
import logo from '../images/arqnex_rodape.png'

const Peoples = (props) => {
    const [filter, setFilter] = useState('Popular');
    const [style, setStyle] = useState('Clássico');
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  
    useEffect(() => {
      fetchUsers(page);
    }, [page]);
  
    const fetchUsers = (page) => {
      // Substitua a URL abaixo pela URL correta do seu endpoint backend
      fetch(`https://api.seusite.com/users?page=${page}&limit=5`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            setUsers(prevUsers => [...prevUsers, ...data]);
          } else {
            setHasMore(false);
          }
        })
        .catch(error => console.error('Erro ao buscar usuários:', error));
    };
  
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
  
    const handleStyleChange = (style) => {
      setStyle(style);
    };
  
    const loadMoreUsers = () => {
      setPage(prevPage => prevPage + 1);
    };
  
    return (
      <>
        <div className='peoples-title'>
          <h1 className='peoples'>Pessoas</h1>
          <p className='peoples-description'>Lorem ipsum dolor sit amet, consetetur sadipsicing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volupta. At vero eos et accusam et justo.</p>
        </div>
  
        <div className="peoples-flex peoples-justify-between peoples-items-center peoples-mt-4 peoples-px-4">
            <div>
                <select value={filter} onChange={handleFilterChange} className="peoples-p-2 peoples-border peoples-rounded">
                    <option value="Popular">Popular</option>
                    <option value="Mais Vistos">Mais Vistos</option>
                </select>
            </div>
            <div className="peoples-flex peoples-space-x-4">
                <button onClick={() => handleStyleChange('Clássico')} className={`peoples-p-2 peoples-border-b-2 ${style === 'Clássico' ? 'peoples-border-black' : 'peoples-border-transparent'}`}>
                    Clássico
                </button>
                <button onClick={() => handleStyleChange('Contemporâneo + Moderno')} className={`peoples-p-2 peoples-border-b-2 ${style === 'Contemporâneo + Moderno' ? 'peoples-border-black' : 'peoples-border-transparent'}`}>
                    Contemporâneo + Moderno
                </button>
            </div>
            <div>
                <input type="text" placeholder="Buscar" className="peoples-p-2 peoples-border peoples-rounded"/>
            </div>
        </div>

      <div className="peoples-mt-10 peoples-px-4">
        {users.map(user => (
          <div key={user.id} className="peoples-user-card peoples-flex peoples-mb-4">
            <div className="peoples-profile-info peoples-flex-shrink-0">
              <img src={user.profileImage} alt={user.name} className="peoples-h-12 peoples-w-12 peoples-rounded-full"/>
              <div className="peoples-ml-4">
                <h3>{user.name}</h3>
                <p>{user.city}, {user.state}</p>
              </div>
            </div>
            <div className="peoples-published-works peoples-flex peoples-ml-4">
              {user.works.slice(0, 3).map((work, index) => (
                <img key={index} src={work.image} alt={`Trabalho ${index + 1}`} className="peoples-h-16 peoples-w-16 peoples-object-cover peoples-mr-2"/>
              ))}
            </div>
          </div>
        ))}
        {hasMore && (
          <div className="peoples-flex peoples-justify-center peoples-mt-4">
            <button onClick={loadMoreUsers} className="peoples-p-2 peoples-border peoples-rounded peoples-bg-gray-200">Carregar mais</button>
          </div>
        )}
      </div>
  
        <div className="grid grid-cols-5 mt-10 ml-2 gap-4 justify-auto">
          {/* RODAPE */}
          <div className="flex">
            <h4 className="items-center">
              <img src={logo} alt="arqnex" className="h-6"/>
              <p className="text-xl my-1">Lorem ipsum dolor sit</p>
            </h4>
          </div>
          <div>
            <p className="items-center font-bold">Redes</p>
            <p className="items-center my-2 font-thin">Facebook</p>
            <p className="items-center my-2 font-thin">Instagram</p>
            <p className="items-center my-2 font-thin">Twitter</p>
          </div>
          <div>
            <p className="items-center font-bold">Contatos</p>
            <p className="items-center my-2 font-thin">arqnex@gmail.com</p>
            <p className="items-center my-2 font-thin">(00)0 0000-0000</p>
          </div>
          <div>
            <p className="items-center font-bold">Contratando</p>
            <p className="items-center my-2 font-thin">Postar um trabalho</p>
            <p className="items-center my-2 font-thin">Procurar por pessoas</p>
            <p className="items-center my-2 font-thin">Crie seu escritório</p>
          </div>
          <div>
            <p className="rounded-lg bg-gray-200 w-92 h-32 mr-5"></p>
            <br></br>
          </div>
        </div>
  
        <div className="m-2 font-light text-xs">
          <p className="text-right font-semibold mr-10 text-purple-700">Desenvolvido por JERA</p>
          <p>@ 2024 G2LMT, todos os direitos reservados.</p>
        </div>
      </>
    );
  };
  
  export default Peoples;