export default function Heading() {
  return (
    <div className="">
      <h1 className="flex font-bold text-3xl text-center text-pretty border p-1 underline">
        <span>
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 mr-2"
          >
            <path d="M21,8H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V8H3A1,1,0,0,0,2,9V22h9V19a1,1,0,0,1,2,0v3h9V9A1,1,0,0,0,21,8ZM6,20H4V18H6Zm0-4H4V14H6Zm0-4H4V10H6Zm7,3H11V13h2Zm0-4H11V9h2Zm0-4H11V5h2Zm7,13H18V18h2Zm0-4H18V14h2Zm0-4H18V10h2Z" />
          </svg>
        </span>
        New Office
      </h1>
      <p className="text-left text-lg">
        Select the office type, office name, postcode, parent office name and 
        account code. Office parameters are to be selected based on the services 
        available at the post office. Click on OK to save the new post office 
        details. 
      </p>
    </div>
  );
}
