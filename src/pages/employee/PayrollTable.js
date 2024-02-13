import React from "react";

const randomNum = () => Math.floor(Math.random() * 10000);

export default function PayrollTable({ employee, tableRef }) {
  return (
    <table
      ref={tableRef}
      style={{
        textAlign: "left",
        width: "100%",
      }}
      className="table-sm"
    >
      <thead>
        <tr className="border-2 border-slate-300">
          <td colSpan={3}>
            <tr>Raison Sociale :</tr>
            <tr>Adresse : {employee.address} </tr>
            <tr>N°EMPLOYEUR : {employee.phone}</tr>
          </td>
          <td colSpan={3}>
            <tr>BULLETIN DE PAIE</tr>
            <tr>ANNEE : 2021</tr>
            <tr>MOIS : JUIN</tr>
          </td>
        </tr>
        <tr className="border-2 border-slate-300">
          <td colSpan={3}>
            <tr>MATRICULE : {employee.id}</tr>
            <tr>FONCTION : {employee.jobTitle}</tr>
            <tr>JOUR.TRAV: 45</tr>
          </td>
          <td colSpan={3}>
            <tr>NOM : {employee.firstName}</tr>
            <tr>PRENOM : {employee.lastName}</tr>
            <tr>DATE DE NAISSANCE : {employee.birthDate}</tr>
            <tr>SITUATION FAMILIALE : {employee.maritalStatus}</tr>
            <tr>DATE ENTRÉE : {employee.hireDate}</tr>
            <tr>NUMERO SS : {employee?.socialSecurityNumber}</tr>
          </td>
        </tr>
      </thead>
      <tbody className="border-2 border-slate-300">
        <tr className="border-2 border-slate-300">
          <td className="font-bold">RUB</td>
          <td className="font-bold">LIBELLE INDEMNITE</td>
          <td className="font-bold">BASE</td>
          <td className="font-bold">NOMBRE/TAUX</td>
          <td className="font-bold">GAINS</td>
          <td className="font-bold">RETENUES</td>
        </tr>
        <tr>
          <td></td>
          <td>SALAIRE DE BASE</td>
          <td>{employee.baseSalary}</td>
          <td></td>
          <td>{employee.baseSalary}</td>
          <td>{employee.baseSalary}</td>
        </tr>
        <tr>
          <td></td>
          <td>RETENUE COTISATION SS</td>
          <td>{employee.baseSalary}</td>

          <td>9%</td>
          <td>{employee.baseSalary - employee.baseSalary * 0.09}</td>
          <td>{employee.baseSalary * 0.09}</td>
        </tr>
        <tr>
          <td></td>
          <td>INDEMNITE DE PANIER</td>
          <td>{randomNum()}</td>
          <td></td>
          <td>{randomNum()}</td>
          <td>{randomNum()}</td>
        </tr>
        <tr>
          <td></td>
          <td>INDEMNITE DE TRANSPORT</td>
          <td>2 348.40</td>
          <td></td>
          <td>{randomNum()}</td>
          <td>{randomNum()}</td>
        </tr>
        <tr>
          <td></td>
          <td>RETENUE IRG</td>
          <td>
            {employee.baseSalary + randomNum() + randomNum() + randomNum()}
          </td>
          <td>{randomNum()}</td>
          <td>{randomNum()}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>TOTAL</td>
          <td>82 037.36</td>
          <td>22 037.36</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5}></td>
          <td className="font-extrabold border-2 border-slate-300">
            NET A PAYER :
            {(
              employee.baseSalary +
              randomNum() +
              randomNum() +
              randomNum() -
              (employee.baseSalary + randomNum() + randomNum() + randomNum()) *
                0.09
            ).toFixed()}
            .00 DA
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
