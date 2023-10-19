"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation'; // Updated import
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import PatientListSearch from '../../../pacientes/pacientes.components/search';
interface FormData {
fechaConsultaexterna: string;
diabetes: boolean;
hipertension: boolean;
cardiopatia: boolean;
otroantecedentemed: string;
apendicectomia: boolean;
hernioplastia: boolean;
colecistectomia: boolean;
histerectomia: boolean;
otroantecedentequir: string;
fracturas: boolean;
accidentesrelevantes: boolean;
    otroantecedentetra: string;
    añosmenarquia: string;  
    ciclos: string;
    duraciondias: string;
    menopausiaanios: string;
fechaRegla1: string;
fechaRegla2: string;
g: boolean;
p: boolean;
ab: boolean;
c: boolean;
hv: boolean;
hm: boolean;
anticonceptivo: boolean;
tipoanticonceptivo: string;
fechaanticonceptivo: string;
motivoconsulta: string;
historiaenfermedad: string;
pa: string;
pfisico: string;
t: string;
resp: string;
peso: string;
talla: string;
tiroidesnormal: boolean;
tiroidesanormal: boolean;
tiroides: string;
mamasnormal: boolean;
mamasanormal: boolean;
mamas: string;
cardiopulmonarnormal: boolean;
cardiopulmonaranormal: boolean;
cardiopulmonar: string;
mucosasnormal: boolean;
mucosasanormal: boolean;
mucosas: string;
flujonormal: boolean;
flujoanormal: boolean;
flujo: string;
labiosmenoresnormal: boolean;
labiosmenoresanormal: boolean;
labiosmenores: string;
labiosmayoresnormal: boolean;
labiosmayoresanormal: boolean;
labiosmayores: string;
aparatourinarionormal: boolean;
aparatourinarioanormal: boolean;
aparatourinario: string;
fondodesaconormal: boolean;
fondodesacoanormal: boolean;
fondodesaco: string;
cupulavaginalnormal: boolean;
cupulavaginalanormal: boolean;
cupulavaginal: string;
cistocele1: boolean;
cistocele2: boolean;
cistocele3: boolean;
cistocele4: boolean;
rectocele1: boolean;
rectocele2: boolean;
rectocele3: boolean;
rectocele4: boolean;
prolapso1: boolean;
prolapso2: boolean;
prolapso3: boolean;
prolapso4: boolean;
formacervix: string;
consistenciacervix: string;
tumoracionescervix: string;
ulceracionescervix: string;
otroscervix: string;
cuerpouterinotamano: string;
cuerpouterinoposicion: string;
cuerpouterinoconsistencia: string;
cuerpouterinomovilidad: string;
cuerpouterinoforma: string;
cuerpouterinootros: string;
anexosizquierdo: string;
anexosderecho: string;
anexosotros: string;
hb: string;
ht: string;
tp: string;
tpt: string;
glicemia: string;
inr: string;
vdrl: string;
hiv: string;
grupo: string;
rh: string;
fechaorina: string;
orinaresultado: string;
orinatratamiento: string;
fechaekg: string;
ekgresultado: string;
ekgtratamiento: string;
fechausg: string;
usgresultado: string;
usgtratamiento: string;
fechapapanicolaou: string;
papanicolaouresultado: string;
papanicolaoutratamiento: string;
fechacolposcopia: string;
colposcopiaresultado: string;
colposcopiatratamiento: string;
fecharx: string;
rxresultado: string;
rxtratamiento: string;
stringotro1: string;
fechaotro1: string;
otroresultado1: string;
otrotratamiento1: string;
stringotro2: string;
fechaotro2: string;
otroresultado2: string;
otrotratamiento2: string;
c1: string;
c2: string;
c3: string;
c4: string;
planterapeutico: string;
fecharegistro: string;
valseg: string;
ri: string;
psalgunavez: boolean;
psultimos12meses: boolean;
pspareja: boolean;
fialgunavez: boolean;
fiultimos12meses: boolean;
fipareja: boolean;
sxalgunavez: boolean;
sxultimos12meses: boolean;
sxpareja: boolean;
an_algunavez: boolean;
an_ultimos12meses: boolean;
an_pareja: boolean;
dpi: string;
paciente: string;
}

function ConsultaExternaFormPage() {
    const params = useParams();
    const { data: session } = useSession();

    const router = useRouter();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    const [newProcedimiento, setNewProcedimiento] = useState<FormData>({ // Initialize with an empty FormData object
    fechaConsultaexterna: '',
diabetes: false,
hipertension: false,
cardiopatia: false,
otroantecedentemed: '',
apendicectomia: false,
hernioplastia: false,
colecistectomia: false,
histerectomia: false,
otroantecedentequir: '',
fracturas: false,
accidentesrelevantes: false,
        otroantecedentetra: '',
        añosmenarquia: '',
        ciclos: '',
        duraciondias: '',
        menopausiaanios: '',
fechaRegla1: '',
fechaRegla2: '',
g: false,
p: false,
ab: false,
c: false,
hv: false,
hm: false,
anticonceptivo: false,
tipoanticonceptivo: '',
fechaanticonceptivo: '',
motivoconsulta: '',
historiaenfermedad: '',
pa: '',
pfisico: '',
t: '',
resp: '',
peso: '',
talla: '',
tiroidesnormal: false,
tiroidesanormal: false,
tiroides: '',
mamasnormal: false,
mamasanormal: false,
mamas: '',
cardiopulmonarnormal: false,
cardiopulmonaranormal: false,
cardiopulmonar: '',
mucosasnormal: false,
mucosasanormal: false,
mucosas: '',
flujonormal: false,
flujoanormal: false,
flujo: '',
labiosmenoresnormal: false,
labiosmenoresanormal: false,
labiosmenores: '',
labiosmayoresnormal: false,
labiosmayoresanormal: false,
labiosmayores: '',
aparatourinarionormal: false,
aparatourinarioanormal: false,
aparatourinario: '',
fondodesaconormal: false,
fondodesacoanormal: false,
fondodesaco: '',
cupulavaginalnormal: false,
cupulavaginalanormal: false,
cupulavaginal: '',
cistocele1: false,
cistocele2: false,
cistocele3: false,
cistocele4: false,
rectocele1: false,
rectocele2: false,
rectocele3: false,
rectocele4: false,
prolapso1: false,
prolapso2: false,
prolapso3: false,
prolapso4: false,
formacervix: '',
consistenciacervix: '',
tumoracionescervix: '',
ulceracionescervix: '',
otroscervix: '',
cuerpouterinotamano: '',
cuerpouterinoposicion: '',
cuerpouterinoconsistencia: '',
cuerpouterinomovilidad: '',
cuerpouterinoforma: '',
cuerpouterinootros: '',
anexosizquierdo: '',
anexosderecho: '',
anexosotros: '',
hb: '',
ht: '',
tp: '',
tpt: '',
glicemia: '',
inr: '',
vdrl: '',
hiv: '',
grupo: '',
rh: '',
fechaorina: '',
orinaresultado: '',
orinatratamiento: '',
fechaekg: '',
ekgresultado: '',
ekgtratamiento: '',
fechausg: '',
usgresultado: '',
usgtratamiento: '',
fechapapanicolaou: '',
papanicolaouresultado: '',
papanicolaoutratamiento: '',
fechacolposcopia: '',
colposcopiaresultado: '',
colposcopiatratamiento: '',
fecharx: '',
rxresultado: '',
rxtratamiento: '',
stringotro1: '',
fechaotro1: '',
otroresultado1: '',
otrotratamiento1: '',
stringotro2: '',
fechaotro2: '',
otroresultado2: '',
otrotratamiento2: '',
c1: '',
c2: '',
c3: '',
c4: '',
planterapeutico: '',
fecharegistro: '',
valseg: '',
ri: '',
psalgunavez: false,
psultimos12meses: false,
pspareja: false,
fialgunavez: false,
fiultimos12meses: false,
fipareja: false,
sxalgunavez: false,
sxultimos12meses: false,
sxpareja: false,
an_algunavez: false,
an_ultimos12meses: false,
an_pareja: false,
dpi: '',
paciente: ''

    });
    const getTreatment = async () => {
        if (params.id) {
            try {
                const res = await axios.get(`http://localhost:3001/api/v1/consultaexterna/${params.id}`, {
                    // headers...
                });

                if (!res.data) {
                    toast.error("This didn't work.");
                    throw new Error('No data found');
                }

                const dataUpdate = res.data;

                // Debugging: Log the dataUpdate object
                console.log('Data from API:', dataUpdate);

                // Extract the relevant properties from the objects
                const pacienteName = dataUpdate.paciente?.docIdentificacion || '';


                // Debugging: Log the extracted values


                // Update the local state with the extracted data
                setNewProcedimiento((prevState) => ({
                    ...prevState || {},
 fechaConsultaexterna: String(dataUpdate.fechaConsultaexterna || '' || null),
diabetes: Boolean(dataUpdate.diabetes || false || null),
hipertension: Boolean(dataUpdate.hipertension || false || null),
cardiopatia: Boolean(dataUpdate.cardiopatia || false || null),
otroantecedentemed: String(dataUpdate.otroantecedentemed || '' || null),
apendicectomia: Boolean(dataUpdate.apendicectomia || false || null),
hernioplastia: Boolean(dataUpdate.hernioplastia || false || null),
colecistectomia: Boolean(dataUpdate.colecistectomia || false || null),
histerectomia: Boolean(dataUpdate.histerectomia || false || null),
otroantecedentequir: String(dataUpdate.otroantecedentequir || '' || null),
fracturas: Boolean(dataUpdate.fracturas || false || null),
accidentesrelevantes: Boolean(dataUpdate.accidentesrelevantes || false || null),
                    otroantecedentetra: String(dataUpdate.otroantecedentetra || '' || null),
                    añosmenarquia: String(dataUpdate.añosmenarquia || '' || null),
                    ciclos: String(dataUpdate.ciclos || '' || null),
                    duraciondias: String(dataUpdate.duraciondias || '' || null),
                    menopausiaanios: String(dataUpdate.menopausiaanios || '' || null),
fechaRegla1: String(dataUpdate.fechaRegla1 || '' || null),
fechaRegla2: String(dataUpdate.fechaRegla2 || '' || null),
g: Boolean(dataUpdate.g || false || null),
p: Boolean(dataUpdate.p || false || null),
ab: Boolean(dataUpdate.ab || false || null),
c: Boolean(dataUpdate.c || false || null),
hv: Boolean(dataUpdate.hv || false || null),
hm: Boolean(dataUpdate.hm || false || null),
anticonceptivo: Boolean(dataUpdate.anticonceptivo || false || null),
tipoanticonceptivo: String(dataUpdate.tipoanticonceptivo || '' || null),
fechaanticonceptivo: String(dataUpdate.fechaanticonceptivo || '' || null),
motivoconsulta: String(dataUpdate.motivoconsulta || '' || null),
historiaenfermedad: String(dataUpdate.historiaenfermedad || '' || null),
pa: String(dataUpdate.pa || '' || null),
pfisico: String(dataUpdate.pfisico || '' || null),
t: String(dataUpdate.t || '' || null),
resp: String(dataUpdate.resp || '' || null),
peso: String(dataUpdate.peso || '' || null),
talla: String(dataUpdate.talla || '' || null),
tiroidesnormal: Boolean(dataUpdate.tiroidesnormal || false || null),
tiroidesanormal: Boolean(dataUpdate.tiroidesanormal || false || null),
tiroides: String(dataUpdate.tiroides || '' || null),
mamasnormal: Boolean(dataUpdate.mamasnormal || false || null),
mamasanormal: Boolean(dataUpdate.mamasanormal || false || null),
mamas: String(dataUpdate.mamas || '' || null),
cardiopulmonarnormal: Boolean(dataUpdate.cardiopulmonarnormal || false || null),
cardiopulmonaranormal: Boolean(dataUpdate.cardiopulmonaranormal || false || null),
cardiopulmonar: String(dataUpdate.cardiopulmonar || '' || null),
mucosasnormal: Boolean(dataUpdate.mucosasnormal || false || null),
mucosasanormal: Boolean(dataUpdate.mucosasanormal || false || null),
mucosas: String(dataUpdate.mucosas || '' || null),
flujonormal: Boolean(dataUpdate.flujonormal || false || null),
flujoanormal: Boolean(dataUpdate.flujoanormal || false || null),
flujo: String(dataUpdate.flujo || '' || null),
labiosmenoresnormal: Boolean(dataUpdate.labiosmenoresnormal || false || null),
labiosmenoresanormal: Boolean(dataUpdate.labiosmenoresanormal || false || null),
labiosmenores: String(dataUpdate.labiosmenores || '' || null),
labiosmayoresnormal: Boolean(dataUpdate.labiosmayoresnormal || false || null),
labiosmayoresanormal: Boolean(dataUpdate.labiosmayoresanormal || false || null),
labiosmayores: String(dataUpdate.labiosmayores || '' || null),
aparatourinarionormal: Boolean(dataUpdate.aparatourinarionormal || false || null),
aparatourinarioanormal: Boolean(dataUpdate.aparatourinarioanormal || false || null),
aparatourinario: String(dataUpdate.aparatourinario || '' || null),
fondodesaconormal: Boolean(dataUpdate.fondodesaconormal || false || null),
fondodesacoanormal: Boolean(dataUpdate.fondodesacoanormal || false || null),
fondodesaco: String(dataUpdate.fondodesaco || '' || null),
cupulavaginalnormal: Boolean(dataUpdate.cupulavaginalnormal || false || null),
cupulavaginalanormal: Boolean(dataUpdate.cupulavaginalanormal || false || null),
cupulavaginal: String(dataUpdate.cupulavaginal || '' || null),
cistocele1: Boolean(dataUpdate.cistocele1 || false || null),
cistocele2: Boolean(dataUpdate.cistocele2 || false || null),
cistocele3: Boolean(dataUpdate.cistocele3 || false || null),
cistocele4: Boolean(dataUpdate.cistocele4 || false || null),
rectocele1: Boolean(dataUpdate.rectocele1 || false || null),
rectocele2: Boolean(dataUpdate.rectocele2 || false || null),
rectocele3: Boolean(dataUpdate.rectocele3 || false || null),
rectocele4: Boolean(dataUpdate.rectocele4 || false || null),
prolapso1: Boolean(dataUpdate.prolapso1 || false || null),
prolapso2: Boolean(dataUpdate.prolapso2 || false || null),
prolapso3: Boolean(dataUpdate.prolapso3 || false || null),
prolapso4: Boolean(dataUpdate.prolapso4 || false || null),
formacervix: String(dataUpdate.formacervix || '' || null),
consistenciacervix: String(dataUpdate.consistenciacervix || '' || null),
tumoracionescervix: String(dataUpdate.tumoracionescervix || '' || null),
ulceracionescervix: String(dataUpdate.ulceracionescervix || '' || null),
otroscervix: String(dataUpdate.otroscervix || '' || null),
cuerpouterinotamano: String(dataUpdate.cuerpouterinotamano || '' || null),
cuerpouterinoposicion: String(dataUpdate.cuerpouterinoposicion || '' || null),
cuerpouterinoconsistencia: String(dataUpdate.cuerpouterinoconsistencia || '' || null),
cuerpouterinomovilidad: String(dataUpdate.cuerpouterinomovilidad || '' || null),
cuerpouterinoforma: String(dataUpdate.cuerpouterinoforma || '' || null),
cuerpouterinootros: String(dataUpdate.cuerpouterinootros || '' || null),
anexosizquierdo: String(dataUpdate.anexosizquierdo || '' || null),
anexosderecho: String(dataUpdate.anexosderecho || '' || null),
anexosotros: String(dataUpdate.anexosotros || '' || null),
hb: String(dataUpdate.hb || '' || null),
ht: String(dataUpdate.ht || '' || null),
tp: String(dataUpdate.tp || '' || null),
tpt: String(dataUpdate.tpt || '' || null),
glicemia: String(dataUpdate.glicemia || '' || null),
inr: String(dataUpdate.inr || '' || null),
vdrl: String(dataUpdate.vdrl || '' || null),
hiv: String(dataUpdate.hiv || '' || null),
grupo: String(dataUpdate.grupo || '' || null),
rh: String(dataUpdate.rh || '' || null),
fechaorina: String(dataUpdate.fechaorina || '' || null),
orinaresultado: String(dataUpdate.orinaresultado || '' || null),
orinatratamiento: String(dataUpdate.orinatratamiento || '' || null),
fechaekg: String(dataUpdate.fechaekg || '' || null),
ekgresultado: String(dataUpdate.ekgresultado || '' || null),
ekgtratamiento: String(dataUpdate.ekgtratamiento || '' || null),
fechausg: String(dataUpdate.fechausg || '' || null),
usgresultado: String(dataUpdate.usgresultado || '' || null),
usgtratamiento: String(dataUpdate.usgtratamiento || '' || null),
fechapapanicolaou: String(dataUpdate.fechapapanicolaou || '' || null),
papanicolaouresultado: String(dataUpdate.papanicolaouresultado || '' || null),
papanicolaoutratamiento: String(dataUpdate.papanicolaoutratamiento || '' || null),
fechacolposcopia: String(dataUpdate.fechacolposcopia || '' || null),
colposcopiaresultado: String(dataUpdate.colposcopiaresultado || '' || null),
colposcopiatratamiento: String(dataUpdate.colposcopiatratamiento || '' || null),
fecharx: String(dataUpdate.fecharx || '' || null),
rxresultado: String(dataUpdate.rxresultado || '' || null),
rxtratamiento: String(dataUpdate.rxtratamiento || '' || null),
stringotro1: String(dataUpdate.stringotro1 || '' || null),
fechaotro1: String(dataUpdate.fechaotro1 || '' || null),
otroresultado1: String(dataUpdate.otroresultado1 || '' || null),
otrotratamiento1: String(dataUpdate.otrotratamiento1 || '' || null),
stringotro2: String(dataUpdate.stringotro2 || '' || null),
fechaotro2: String(dataUpdate.fechaotro2 || '' || null),
otroresultado2: String(dataUpdate.otroresultado2 || '' || null),
otrotratamiento2: String(dataUpdate.otrotratamiento2 || '' || null),
c1: String(dataUpdate.c1 || '' || null),
c2: String(dataUpdate.c2 || '' || null),
c3: String(dataUpdate.c3 || '' || null),
c4: String(dataUpdate.c4 || '' || null),
planterapeutico: String(dataUpdate.planterapeutico || '' || null),
fecharegistro: String(dataUpdate.fecharegistro || '' || null),
valseg: String(dataUpdate.valseg || '' || null),
ri: String(dataUpdate.ri || '' || null),
psalgunavez: Boolean(dataUpdate.psalgunavez || false || null),
psultimos12meses: Boolean(dataUpdate.psultimos12meses || false || null),
pspareja: Boolean(dataUpdate.pspareja || false || null),
fialgunavez: Boolean(dataUpdate.fialgunavez || false || null),
fiultimos12meses: Boolean(dataUpdate.fiultimos12meses || false || null),
fipareja: Boolean(dataUpdate.fipareja || false || null),
sxalgunavez: Boolean(dataUpdate.sxalgunavez || false || null),
sxultimos12meses: Boolean(dataUpdate.sxultimos12meses || false || null),
sxpareja: Boolean(dataUpdate.sxpareja || false || null),
an_algunavez: Boolean(dataUpdate.an_algunavez || false || null),
an_ultimos12meses: Boolean(dataUpdate.an_ultimos12meses || false || null),
an_pareja: Boolean(dataUpdate.an_pareja || false || null),
dpi: String(dataUpdate.dpi || '' || null),
   paciente: pacienteName || '',        
                }));
                // Update form values using setValue
                Object.keys(dataUpdate).forEach((key) => {
                    setValue(key as keyof FormData, dataUpdate[key as keyof FormData]);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
    useEffect(() => {
        getTreatment(); // Call the getTreatment function here
       
        setValue('fecharegistro', '2000-01-01');
    }, [params.id, session]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                await axios.delete(`http://localhost:3001/api/v1/consultaexterna/${params.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user?.token}`,
                    },
                });
                router.push('/sys/dashboard/procedimientosespec/consultaexterna');
                router.refresh(); // Use reload instead of refresh
            } catch (error) {
                console.error(error);
                toast.error("This didn't work.");
                console.error(error);
                toast.error('Hubo un error al eliminar el procedimiento');
            }
        }
    };

    const updateTask = async (data: FormData) => {
        try {
            router.refresh();
            console.log('Datos que se envían al actualizar paciente:', { ...data });

            // Convert patient and treatmentype objects to strings
            const updateData = {
                fechaConsultaexterna: data.fechaConsultaexterna,
                diabetes: data.diabetes,
                hipertension: data.hipertension,
                cardiopatia: data.cardiopatia,
                otroantecedentemed: data.otroantecedentemed,
                apendicectomia: data.apendicectomia,
                hernioplastia: data.hernioplastia,
                colecistectomia: data.colecistectomia,
                histerectomia: data.histerectomia,
                otroantecedentequir: data.otroantecedentequir,
                fracturas: data.fracturas,
                accidentesrelevantes: data.accidentesrelevantes,
                otroantecedentetra: data.otroantecedentetra,
                fechaRegla1: data.fechaRegla1,
                fechaRegla2: data.fechaRegla2,
                g: data.g,
                p: data.p,
                ab: data.ab,
                c: data.c,
                hv: data.hv,
                hm: data.hm,
                anticonceptivo: data.anticonceptivo,
                tipoanticonceptivo: data.tipoanticonceptivo,
                fechaanticonceptivo: data.fechaanticonceptivo,
                motivoconsulta: data.motivoconsulta,
                historiaenfermedad: data.historiaenfermedad,
                pa: data.pa,
                pfisico: data.pfisico,
                t: data.t,
                resp: data.resp,
                peso: data.peso,
                talla: data.talla,
                tiroidesnormal: data.tiroidesnormal,
                tiroidesanormal: data.tiroidesanormal,
                tiroides: data.tiroides,
                mamasnormal: data.mamasnormal,
                mamasanormal: data.mamasanormal,
                mamas: data.mamas,
                cardiopulmonarnormal: data.cardiopulmonarnormal,
                cardiopulmonaranormal: data.cardiopulmonaranormal,
                cardiopulmonar: data.cardiopulmonar,
                mucosasnormal: data.mucosasnormal,
                mucosasanormal: data.mucosasanormal,
                mucosas: data.mucosas,
                flujonormal: data.flujonormal,
                flujoanormal: data.flujoanormal,
                flujo: data.flujo,
                labiosmenoresnormal: data.labiosmenoresnormal,
                labiosmenoresanormal: data.labiosmenoresanormal,
                labiosmenores: data.labiosmenores,
                labiosmayoresnormal: data.labiosmayoresnormal,
                labiosmayoresanormal: data.labiosmayoresanormal,
                labiosmayores: data.labiosmayores,
                aparatourinarionormal: data.aparatourinarionormal,
                aparatourinarioanormal: data.aparatourinarioanormal,
                aparatourinario: data.aparatourinario,
                fondodesaconormal: data.fondodesaconormal,
                fondodesacoanormal: data.fondodesacoanormal,
                fondodesaco: data.fondodesaco,
                cupulavaginalnormal: data.cupulavaginalnormal,
                cupulavaginalanormal: data.cupulavaginalanormal,
                cupulavaginal: data.cupulavaginal,
                cistocele1: data.cistocele1,
                cistocele2: data.cistocele2,
                cistocele3: data.cistocele3,
                cistocele4: data.cistocele4,
                rectocele1: data.rectocele1,
                rectocele2: data.rectocele2,
                rectocele3: data.rectocele3,
                rectocele4: data.rectocele4,
                prolapso1: data.prolapso1,
                prolapso2: data.prolapso2,
                prolapso3: data.prolapso3,
                prolapso4: data.prolapso4,
                formacervix: data.formacervix,
                consistenciacervix: data.consistenciacervix,
                tumoracionescervix: data.tumoracionescervix,
                ulceracionescervix: data.ulceracionescervix,
                otroscervix: data.otroscervix,
                cuerpouterinotamano: data.cuerpouterinotamano,
                cuerpouterinoposicion: data.cuerpouterinoposicion,
                cuerpouterinoconsistencia: data.cuerpouterinoconsistencia,
                cuerpouterinomovilidad: data.cuerpouterinomovilidad,
                cuerpouterinoforma: data.cuerpouterinoforma,
                cuerpouterinootros: data.cuerpouterinootros,
                anexosizquierdo: data.anexosizquierdo,
                anexosderecho: data.anexosderecho,
                anexosotros: data.anexosotros,
                hb: data.hb,
                ht: data.ht,
                tp: data.tp,
                tpt: data.tpt,
                glicemia: data.glicemia,
                inr: data.inr,
                vdrl: data.vdrl,
                hiv: data.hiv,
                grupo: data.grupo,
                rh: data.rh,
                fechaorina: data.fechaorina,
                orinaresultado: data.orinaresultado,
                orinatratamiento: data.orinatratamiento,
                fechaekg: data.fechaekg,
                ekgresultado: data.ekgresultado,
                ekgtratamiento: data.ekgtratamiento,
                fechausg: data.fechausg,
                usgresultado: data.usgresultado,
                usgtratamiento: data.usgtratamiento,
                fechapapanicolaou: data.fechapapanicolaou,
                papanicolaouresultado: data.papanicolaouresultado,
                papanicolaoutratamiento: data.papanicolaoutratamiento,
                fechacolposcopia: data.fechacolposcopia,
                colposcopiaresultado: data.colposcopiaresultado,
                colposcopiatratamiento: data.colposcopiatratamiento,
                fecharx: data.fecharx,
                rxresultado: data.rxresultado,
                rxtratamiento: data.rxtratamiento,
                stringotro1: data.stringotro1,
                fechaotro1: data.fechaotro1,
                otroresultado1: data.otroresultado1,
                otrotratamiento1: data.otrotratamiento1,
                stringotro2: data.stringotro2,
                fechaotro2: data.fechaotro2,
                otroresultado2: data.otroresultado2,
                otrotratamiento2: data.otrotratamiento2,
                c1: data.c1,
                c2: data.c2,
                c3: data.c3,
                c4: data.c4,
                planterapeutico: data.planterapeutico,
                fecharegistro: data.fecharegistro,
                valseg: data.valseg,
                ri: data.ri,
                psalgunavez: data.psalgunavez,
                psultimos12meses: data.psultimos12meses,
                pspareja: data.pspareja,
                fialgunavez: data.fialgunavez,
                fiultimos12meses: data.fiultimos12meses,
                fipareja: data.fipareja,
                sxalgunavez: data.sxalgunavez,
                sxultimos12meses: data.sxultimos12meses,
                sxpareja: data.sxpareja,
                an_algunavez: data.an_algunavez,
                an_ultimos12meses: data.an_ultimos12meses,
                an_pareja: data.an_pareja,
                paciente: data.paciente.toString(), // Convert patient object to string
                dpi: data.dpi,
            };

            await axios.patch(`http://localhost:3001/api/v1/consultaexterna/${params.id}`, { ...updateData }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            });
            router.push('/sys/dashboard/procedimientosespec/consultaexterna');
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("This didn't work.");
            console.error(error);
            toast.error('Hubo un error al actualizar el procedimiento');
        }
    };


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProcedimiento((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };



    const onSubmit = async (data: FormData) => {
        console.log('Data to be sent:', data); // Log the data

        if (!params.id) {
            try {
                const response = await axios.post(
                    'http://localhost:3001/api/v1/consultaexterna',
                    { ...data }, // Use "paciente" for the field name
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${session?.user?.token}`,
                        },
                    }
                );

                // Update local state with the newly created treatment data
                const newTreatment = response.data;
                setNewProcedimiento(newTreatment);

                console.log('Formulario enviado con éxito');
                toast.success('Treatments creado', { duration: 3000 });
                router.push('/sys/dashboard/procedimientosespec/consultaexterna');
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                toast.error("Recuerda Validar DPI & Paciente");
            }
        } else {
            await updateTask(data);
        }
    };


    return (
              <div className="flex justify-center items-center w-full ">
  <div className="flex flex-col justify-center items-center">
                <Toaster />

                <a className="flex title-font font-medium justify-center items-center text-gray-900 pb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-6 h-6 stroke-rose-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>

                    <span className=" text-2xl font-serif justify-center items-center">
          {!params.id ? 'Añadir Consulta Externa' : 'Editar Consulta Externa'}
        </span>
                </a>
<div className='justify-center items-center'>
                {params.id ? (
                    <button
                        className="text-white bg-rose-900 border-0 justify-center items-center py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg"
                        onClick={handleDelete}
                    >
                        Eliminar Consulta Externa ID. {params.id}
                    </button>
                ) : (
                    <button
                        className="text-white bg-rose-300 border-0 py-2 px-6 rounded text-lg cursor-not-allowed "
                        disabled
                    >
                        Añadiendo Consulta Externa
                    </button>
                    )}
                    </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div>
<div className="px-5 pt-5 flex">
  <div className="flex-1 mr-5">
    <label htmlFor="fechaConsultaexterna" className="block text-ls font-medium leading-6 text-gray-900">
      Fecha de Consulta Externa
    </label>
    <label htmlFor="fechaConsultaexterna" className="block text-ls font-medium leading-6 text-rose-500">
      Año-Mes-Día
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaConsultaexterna"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de Tratamiento"
        {...register('fechaConsultaexterna', { required: false })}
      />
    </div>
  </div>

                            </div>
                            


                             <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                    <div>
                                        <label htmlFor="paciente" className="block text-ls font-medium leading-6 text-gray-900">
                                            Pacientes
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="paciente" // Use 'patient' here if it's the field name in your form
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="DPI Pacientes"
                                                {...register('paciente', { required: false })}
                                                value={newProcedimiento.paciente.toString()}
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="dpi" className="block text-ls font-medium leading-6 text-gray-900">
                                    DPI
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="dpi"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="DPI"
                                        {...register('dpi' , { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>
                            
                            <div className="text-gray-400 items-center px-5 pt-5">Recuerda hacer Click sobre el campo de Paciente y DPI para ser válidos</div>
   <div>
<label htmlFor="medic" className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES MÉDICOS
                                </label>
                            </div>     
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="diabetes" className="block text-ls font-medium text-gray-900">
                                        Diabetes 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="diabetes"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('diabetes', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="hipertension" className="block text-ls font-medium text-gray-900">
                                        Hipertensión Arterial
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="hipertension"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('hipertension', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="cardiopatia" className="block text-ls font-medium text-gray-900">
                                       Cardiopatía
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cardiopatia"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cardiopatia', { required: false })}
                                        />
                                    </div>
                                </div>
                          
                          

                            </div>                           
           <div>
<label htmlFor="medic" className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES QUIRÚRGICOS
                                </label>
                            </div>     
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/4 pr-4">
                                    <label htmlFor="diabetes" className="block text-ls font-medium text-gray-900">
                                        Apendicectomía 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="apendicectomia"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('apendicectomia', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/4 pr-4">
                                    <label htmlFor="hernio" className="block text-ls font-medium text-gray-900">
                                        Hernioplastía
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="hernioplastia"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('hernioplastia', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/4 pr-4">
                                    <label htmlFor="coles" className="block text-ls font-medium text-gray-900">
                                      Colesistectomía
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="colecistectomia"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('colecistectomia', { required: false })}
                                        />
                                    </div>
                                </div>
   <div className="w-full md:w-1/4 pr-4">
                                    <label htmlFor="histerectom" className="block text-ls font-medium text-gray-900">
                                       Histerectomía
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="histerectomia"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('histerectomia', { required: false })}
                                        />
                                    </div>
                                </div>                       
                            </div>                    

                             <div>
<label htmlFor="medic" className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES TRAUMÁTICOS
                                </label>
                            </div>     
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/2 pr-4">
                                    <label htmlFor="fract" className="block text-ls font-medium text-gray-900">
                                        Fracturas
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fracturas"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fracturas', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/2 pr-4">
                                    <label htmlFor="hernio" className="block text-ls font-medium text-gray-900">
                                        Accidentes Relevantes
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="accidentesrelevantes"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('accidentesrelevantes', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div> 

                                <div className="w-full md:w-full px-4 pt-1">
                                
                                <div>
                                        <label htmlFor="otropersonal" className="block text-ls font-medium leading-6 text-gray-900">
                                          Otros/ Especifique:
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="otropersonal" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Tratamiento"
                                                {...register('otroantecedentetra', { required: false })}
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>
                        <div>
                            <label htmlFor="medic" className="block text-ls font-small text-rose-500 px-5 pt-5">
                                       ANTECEDENTES GINECOLÓGICOS
                                </label>
                            </div>

          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="añosmenarquia" className="block text-ls font-medium leading-6 text-gray-900">
                                           Menarquía
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="añosmenarquia" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Años Menarquía"
                                                {...register('añosmenarquia', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>años</a>
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="ciclos de la Mujer" className="block text-ls font-medium leading-6 text-gray-900">
                                    Ciclos cada
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="ciclos"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Ciclos"
                                        {...register('ciclos', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                     <a className='pt-1'>días</a>
                            </div>

                            
                        </div>    




                            
                            <div>
<label htmlFor="medic" className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-5">
                                       OTROS REGISTROS
                                </label>
                            </div>

                              <div className="w-full md:w-1/3 pl-4">
    <label htmlFor="fechareg" className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Registro
                                     <a className='text-rose-500 pl-3'>Año-Mes-Día</a>
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fecharegistro"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Registro"
        {...register('fecharegistro', { required: false })}
      />
    </div>
  </div>

  

                        
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="valsegs" className="block text-ls font-medium leading-6 text-gray-900">
                                            ¿Val.seg?
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="valseg" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Val.seg?"
                                                {...register('valseg', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="rii" className="block text-ls font-medium leading-6 text-gray-900">
                                    RI
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="ri"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="RI"
                                        {...register('ri', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            </div>

            <label htmlFor="ayuda?" className=" block text-ls font-medium leading-6 text-gray-900  pt-5 pb-5">
                                    Acepto Ayuda?
                                </label>                 

          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label htmlFor="valsegs" className="block text-ls font-medium leading-6 text-gray-900">
                                            P S
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="psal" className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="psalgunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('psalgunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="psult12" className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="psultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('psultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="psparej" className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="pspareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('pspareja', { required: false })}
                                        />
                                    </div>
                                </div>
                          
                          

                            </div> 
                            </div>
                            </div>              
                        
          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label htmlFor="valsegs" className="block text-ls font-medium leading-6 text-gray-900">
                                            F I
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="fial" className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fialgunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fialgunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="fiult12" className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fiultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fiultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="fiparej" className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fipareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fipareja', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div> 
                            </div>
                            </div>  
                            
          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label htmlFor="valsegs" className="block text-ls font-medium leading-6 text-gray-900">
                                            S X
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="sxal" className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="sxalgunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('sxalgunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="sxult12" className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="sxultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('sxultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="sxparej" className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="sxpareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('sxpareja', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div> 
                            </div>
                            </div>  

          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label htmlFor="valsegs" className="block text-ls font-medium leading-6 text-gray-900">
                                            A N
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="an_al" className="block text-ls font-medium text-gray-900">
                                        Alguna vez 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="an_algunavez"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('an_algunavez', { required: false })}
                                        />
                                    </div>
                                </div>
 
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="an_ult12" className="block text-ls font-medium text-gray-900">
                                        ¿Últimos 12 Meses?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="an_ultimos12meses"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('an_ultimos12meses', { required: false })}
                                        />
                                    </div>
                                </div>
<div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="an_parej" className="block text-ls font-medium text-gray-900">
                                       Pareja= SÍ
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="an_pareja"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('an_pareja', { required: false })}
                                        />
                                    </div>
                                </div>
                            </div> 
                            </div>
                            </div>  
                            
</div>
                        <div className="flex flex-col items-center">
                            <div className="pl-5 py-5 flex">
                                <button
                                    className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500
                        rounded text-lg"
                                    type="submit"
                                >
                                    {!params.id ? 'Guardar Registro Consulta Externa' : 'Modificar Registro Consulta Externa'}
                                </button>
                              
                            </div>
                        </div>
                        
                    </form>
                       <div className="flex justify-center">
            <div className="text-neutral-400 items-center">Recuerda hacer Click sobre el campo de Paciente y DPI para ser válidos</div>
        </div>
                </div>
            </div>
       
            <div className="">
                <PatientListSearch/>
            </div>
        </div>

    );
}

export default ConsultaExternaFormPage;
