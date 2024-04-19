import ACSExp from "./ACS-Exp";
import ACSTable from "./ACS-table";
import style from './acs-tables.module.scss'

const attributes = ["Corpo", "Tecnologia", "Coração", "Mente"]
const conditions = ["Chateado", "Assustado", "Exausto", "Machucado", "Acabado"]
const skills = [
    "Furtividade (Corpo)", "Força (Corpo)", "Movimentação (Corpo)",
    "Mecânica (Tecnologia)", "Programação (Tecnologia)", "Cálculo (Tecnologia)",
    "Contatos (Coração)", "Charme (Coração)", "Liderança (Coração)",
    "Investigação (Mente)", "Conhecimento (Mente)", "Empatia (Mente)"
]

export default function ACSTables() {
        return (
            <section className={style.ACSTable}>
                <ACSTable
                    name="ATRIBUTOS"
                    inputList={attributes}
                    type="number"
                />
                <ACSTable
                    name="CONDIÇÕES"
                    inputList={conditions}
                    type="checkbox"
                />
                <ACSTable
                    name="PERÍCIAS"
                    inputList={skills}
                    type="number"
                />
                <ACSExp/>
            </section>
        )
}