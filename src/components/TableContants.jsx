import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Nombre", "Telefono", "Fecha registro", ""];

const TABLE_ROWS = [
  {
    nombre: "John Michael",
    telefono: "9613251042",
    fecha: "23/04/18",
  },
  {
    nombre: "Alexa Liras",
    telefono: "9613251042",
    fecha: "23/04/18",
  },
  {
    nombre: "Laurent Perrier",
    telefono: "9613251042",
    fecha: "19/09/17",
  },
  {
    nombre: "Michael Levi",
    telefono: "9613251042",
    fecha: "24/12/08",
  },
  {
    nombre: "Richard Gran",
    telefono: "9613251042",
    fecha: "04/10/21",
  },
];

const TableContacts = () => {
  return (
    <div className="px-10">
      <Card classnombre="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ nombre: nombre, telefono: telefono, fecha: fecha }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={nombre}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {nombre}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {telefono}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fecha}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Edit
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default TableContacts;
