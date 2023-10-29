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
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/consultaexterna/${params.id}`, {
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
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
        setValue('fechaRegla1', '2020-01-01');
        setValue('fechaRegla2', '2020-01-01');
        setValue('fechaanticonceptivo', '2020-01-01');
        setValue('fechaorina', '2020-01-01');
        setValue('fechaekg', '2020-01-01');
        setValue('fechausg', '2020-01-01');
        setValue('fechapapanicolaou', '2020-01-01');
        setValue('fechacolposcopia', '2020-01-01');
        setValue('fecharx', '2020-01-01');
        setValue('fechaotro1', '2020-01-01');
        setValue('fechaotro2', '2020-01-01');

    }, [params.id, session]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/consultaexterna/${params.id}`, {
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
                añosmenarquia: data.añosmenarquia,
                ciclos: data.ciclos,
                duraciondias: data.duraciondias,
                menopausiaanios: data.menopausiaanios,
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

            await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/consultaexterna/${params.id}`, { ...updateData }, {
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
                   `${process.env.NEXT_PUBLIC_BACKEND_URL}/consultaexterna`,
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
              <div className="flex justify-center items-start w-full ">
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
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
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
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES QUIRÚRGICOS
                                </label>
                            </div>     
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/4 pr-4">
                                    <label htmlFor="apendicectomia" className="block text-ls font-medium text-gray-900">
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
                                    <label htmlFor="hernioplastia" className="block text-ls font-medium text-gray-900">
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
                                    <label className="block text-ls font-medium text-gray-900">
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
                                    <label  className="block text-ls font-medium text-gray-900">
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
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       ANTECEDENTES TRAUMÁTICOS
                                </label>
                            </div>     
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/2 pr-4">
                                    <label htmlFor="fracturas" className="block text-ls font-medium text-gray-900">
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
                                    <label  className="block text-ls font-medium text-gray-900">
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
  <label htmlFor="otroantecedentetra" className="block text-ls font-medium leading-6 text-gray-900">
    Otros/ Especifique:
  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otroantecedentetra"
      className="block rounded-md border-0 h-24 w-11/12	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('otroantecedentetra', { required: false })}
      onChange={handleChange}
    />
  </div>
</div>

                                </div>
                        <div>
                            <label className="block text-ls font-small text-rose-500 px-5 pt-5">
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
                                <label htmlFor="ciclos" className="block text-ls font-medium leading-6 text-gray-900">
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

 <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="duraciondias" className="block text-ls font-medium leading-6 text-gray-900">
                                           Duración 
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="duraciondias" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Duración Días"
                                                {...register('duraciondias', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>días</a>
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="menopausiaanios" className="block text-ls font-medium leading-6 text-gray-900">
                                    Menopausia
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="menopausiaanios"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Menopausia"
                                        {...register('menopausiaanios', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                     <a className='pt-1'>años</a>
                            </div>  
                        </div>    
 <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                 <div className="flex-1 mr-5">
    <label  className="block text-ls font-medium leading-6 text-gray-900">
      Fecha Penúltima Regla
    </label>
    
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaRegla1"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de Penúltima Regla"
        {...register('fechaRegla1', { required: false })}
      />
    </div>
  </div> 
                 
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                               <div className="w-full md:w-1/2 pr-4">
                                 <div className="flex-1 mr-5">
    <label  className="block text-ls font-medium leading-6 text-gray-900">
      Fecha Última Regla
    </label>
    
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaRegla2"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha de última Regla"
        {...register('fechaRegla2', { required: false })}
      />
    </div>
  </div> 
                 
                            </div>                  
                            </div>
                            </div>    
       <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="g" className="block text-ls font-medium leading-6 text-gray-900">
                                           G
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="g" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="G"
                                                {...register('g', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="p" className="block text-ls font-medium leading-6 text-gray-900">
                                    P
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="p"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="P"
                                        {...register('p', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="ab" className="block text-ls font-medium leading-6 text-gray-900">
                                    AB
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="ab"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="AB"
                                        {...register('ab', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                            
       <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/3 pr-4">
                                
                                <div>
                                        <label htmlFor="c" className="block text-ls font-medium leading-6 text-gray-900">
                                           C
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="c" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="C"
                                                {...register('c', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="hv" className="block text-ls font-medium leading-6 text-gray-900">
                                    HV
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="hv"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="HV"
                                        {...register('hv', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                            <div className="w-full md:w-1/3 pl-4">
                                <label htmlFor="hm" className="block text-ls font-medium leading-6 text-gray-900">
                                    HM
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="hm"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="HM"
                                        {...register('hm', { required: false })}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                                                     <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="anticonceptivo" className="block text-ls font-medium text-gray-900">
                                        ¿Anticonceptivo?
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="anticonceptivo"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('anticonceptivo', { required: false })}
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 pl-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Tipo Anticonceptivo
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="tipoanticonceptivo"
                                            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Tipo Anticonceptivo"
                                            {...register('tipoanticonceptivo', { required: false })}
                                        />
                                    </div>
                                    
                            </div>
                            
                              <div className="w-full md:w-1/3 pl-4">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Anticonceptivo
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaanticonceptivo"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Anti"
        {...register('fechaanticonceptivo', { required: false })}
      />
    </div>
  </div>
                            </div>
                            
                                <div className="w-full md:w-full px-4 pt-1">
                                
                   <div>
  <label htmlFor="motivoconsulta" className="block text-ls font-medium leading-6 text-gray-900">
Motivo Consulta  </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="motivoconsulta"
      className="block rounded-md border-0 h-24 w-11/12	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Motivo"
      {...register('motivoconsulta', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
<div className="w-full md:w-full px-4 pt-1">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
                                        Historia de la Enfermedad
                                    </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="historiaenfermedad"
      className="block rounded-md border-0 h-24 w-11/12	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Historia"
      {...register('historiaenfermedad', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>

<div>
                            <label className="block text-ls font-small text-rose-500 px-5 pt-5">
                                       EXÁMEN FÍSICO
                                </label>
                            </div>

          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="pa" className="block text-ls font-medium leading-6 text-gray-900">
                                           PA
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="pa" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="PA mm/hg"
                                                {...register('pa', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>mm/hg</a>
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="pfisico" className="block text-ls font-medium leading-6 text-gray-900">
                                    P 
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="pfisico"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="P"
                                        {...register('pfisico', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    
                            </div>

                            
                        </div>    
<div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="t" className="block text-ls font-medium leading-6 text-gray-900">
                                           T
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="t" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="T"
                                                {...register('t', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="resp" className="block text-ls font-medium leading-6 text-gray-900">
                                   Resp.
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="resp"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Resp."
                                        {...register('resp', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                     
                            </div>

                            
                        </div>    
<div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="peso" className="block text-ls font-medium leading-6 text-gray-900">
                                           Peso
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="peso" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Peso en Libras"
                                                {...register('peso', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>lbs</a>
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="talla" className="block text-ls font-medium leading-6 text-gray-900">
                                    Talla
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="talla"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Talla"
                                        {...register('talla', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                     <a className='pt-1'>cm</a>
                            </div>

                            
                        </div>    
                                         <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       EXAMENES ESPECÍFICOS
                                </label>
                            </div> 
                            <div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Tiroides
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Tiroides Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="tiroidesnormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('tiroidesnormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Tiroides Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="tiroidesanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('tiroidesanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Explicación Tiroides</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="tiroides"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Tiroides"
      {...register('tiroides', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>
             
                            
                            <div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Mamas
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Mamas Normal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="mamasnormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('mamasnormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Mamas Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="mamasanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('mamasanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Mamas</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="mamas"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Mamas"
      {...register('mamas', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>                

 <div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="cardiopulmonar" className="block text-ls font-medium text-gray-900">
                                        Cardiopulmonar
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="cardiopulmonarnormal" className="block text-ls font-medium text-gray-900">
                                        Cardiopulmonar Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cardiopulmonarnormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cardiopulmonarnormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Cardiopulmonar Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cardiopulmonaranormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cardiopulmonaranormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Cardiopulmonar</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="cardiopulmonar"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Cardiopulmonar"
      {...register('cardiopulmonar', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            
 <div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="mucosas" className="block text-ls font-medium text-gray-900">
                                        Mucosas
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="mucosasnormal" className="block text-ls font-medium text-gray-900">
                                        Mucosas Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="mucosasnormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('mucosasnormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Mucosas Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="mucosasanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('mucosasanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Mucosas</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="mucosas"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Mucosas"
      {...register('mucosas', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>

    <div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="flujo" className="block text-ls font-medium text-gray-900">
                                        Flujo
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="flujonormal" className="block text-ls font-medium text-gray-900">
                                        Flujo Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="flujonormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('flujonormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="flujoanormal" className="block text-ls font-medium text-gray-900">
                                        Flujo Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="flujoanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('flujoanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Flujo</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="flujo"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Flujo"
      {...register('flujo', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>

 <div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="labiosmenores" className="block text-ls font-medium text-gray-900">
                                        Labios Menores
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="labiosmenoresnormal" className="block text-ls font-medium text-gray-900">
                                        Labios Menores Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="labiosmenoresnormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('labiosmenoresnormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Labios Menores Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="labiosmenoresanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('labiosmenoresanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Labios Menores</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="labiosmenores"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Labios Menores"
      {...register('labiosmenores', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>

<div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="labiosmayores" className="block text-ls font-medium text-gray-900">
                                        Labios Mayores
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="labiosmayoresnormal" className="block text-ls font-medium text-gray-900">
                                        Labios Mayores Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="labiosmayoresnormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('labiosmayoresnormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Labios Mayores Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="labiosmayoresanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('labiosmayoresanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Labios Mayores</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="labiosmayores"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Labios Mayores"
      {...register('labiosmayores', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>

<div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label  className="block text-ls font-medium text-gray-900">
                                        Aparato Urinario
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="aparatourinarionormal" className="block text-ls font-medium text-gray-900">
                                        Aparato Urinario Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="aparatourinarionormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('aparatourinarionormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Aparato Urinario Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="aparatourinarioanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('aparatourinarioanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Aparato Urinario</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otrofamiliar"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Aparato Urinario"
      {...register('aparatourinario', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>

<div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="fondodesaco" className="block text-ls font-medium text-gray-900">
                                        Fondo de saco
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="fondodesaconormal" className="block text-ls font-medium text-gray-900">
                                        Fondo de saco Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fondodesaconormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fondodesaconormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Fondo de saco Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="fondodesacoanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('fondodesacoanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Explicación Fondo de saco</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="fondodesaco"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Fondo de saco"
      {...register('fondodesaco', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>

<div>
                            <div className="px-5 pt-5 flex flex-wrap">
                                          <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="cupulavaginal" className="block text-ls font-medium text-gray-900">
                                        Cupulavaginal
                                    </label>
                            
                                </div>
                                <div className="w-full md:w-1/3 pr-4">
                                    <label htmlFor="cupulavaginalnormal" className="block text-ls font-medium text-gray-900">
                                        Cúpula vaginal Normal 
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cupulavaginalnormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cupulavaginalnormal', { required: false })}
                                        />
                                    </div>
                                </div> 
 
                                <div className="w-full md:w-1/3 pr-4">
                                    <label className="block text-ls font-medium text-gray-900">
                                        Cúpula vaginal Anormal
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="checkbox"
                                            id="cupulavaginalanormal"
                                            className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                                            {...register('cupulavaginalanormal', { required: false })}
                                        />
                                    </div>
                                </div>

                            </div>
                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Explicación Cúpula vaginal</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="cupulavaginal"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Cúpula vaginal"
      {...register('cupulavaginal', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            </div>

 
      <div className="px-5 pt-5 flex flex-wrap">
   <div className="w-full md:w-1/5 pr-4 px-4 flex items-center">
        <label  className="block text-ls font-medium text-gray-900">
            Cistocele
        </label>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label  className="block text-ls font-medium text-gray-900">
            G I
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="cistocele1"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('cistocele1', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G II
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="cistocele2"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('cistocele2', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G III
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="cistocele3"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('cistocele3', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-4 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G IV
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="cistocele4"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('cistocele4', { required: false })}
            />
        </div>
    </div>
</div>

 <div className="px-5 pt-5 flex flex-wrap">
   <div className="w-full md:w-1/5 pr-4 px-4 flex items-center">
        <label  className="block text-ls font-medium text-gray-900">
            Rectocele
        </label>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label  className="block text-ls font-medium text-gray-900">
            G I
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="rectocele1"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('rectocele1', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G II
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="rectocele2"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('rectocele2', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G III
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="rectocele3"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('rectocele3', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-4 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G IV
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="rectocele4"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('rectocele4', { required: false })}
            />
        </div>
    </div>
</div>

 <div className="px-5 pt-5 flex flex-wrap">
   <div className="w-full md:w-1/5 pr-4 px-4 flex items-center">
        <label  className="block text-ls font-medium text-gray-900">
            Prolapso Uterino
        </label>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label htmlFor="prolapso1" className="block text-ls font-medium text-gray-900">
            G I
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="prolapso1"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('prolapso1', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G II
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="prolapso2"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('prolapso2', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-1 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G III
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="prolapso3"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('prolapso3', { required: false })}
            />
        </div>
    </div>
    <div className="w-full md:w-1/5 pr-4 flex items-center">
        <label className="block text-ls font-medium text-gray-900">
            G IV
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type="checkbox"
                id="prolapso4"
                className="form-checkbox h-5 w-5 text-rose-950 transition duration-150 ease-in-out"
                {...register('prolapso4', { required: false })}
            />
        </div>
    </div>
</div>

                            <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-1">
                                      CÉRVIX
                                </label>
                            </div>
            
<div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="formacervix" className="block text-ls font-medium leading-6 text-gray-900">
                                           Forma Cérvix
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="formacervix" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Forma Cérvix"
                                                {...register('formacervix', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="consistenciacervix" className="block text-ls font-medium leading-6 text-gray-900">
                                    Consistencia Cérvix
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="consistenciacervix"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Consistencia"
                                        {...register('consistenciacervix', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    
                            </div>

                            
                        </div>                     
<div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="tumoracionescervix" className="block text-ls font-medium leading-6 text-gray-900">
                                           Tumoraciones Cérvix
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="tumoracionescervix" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Tumoraciones Cérvix"
                                                {...register('tumoracionescervix', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Ulceraciones Cérvix 
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="ulveracionescervix"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Ulceraciones Cérvix"
                                        {...register('ulceracionescervix', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    
                            </div> 
                        </div>                     
                                                                  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Otros</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otroscervix"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones Cérvix"
      {...register('otroscervix', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>

           
                            <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-1">
                                      CUERPO UTERINO
                                </label>
                            </div>
            
<div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label className="block text-ls font-medium leading-6 text-gray-900">
                                           Tamaño Cuerpo Uterino en Cm.
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="cuerpouterinotamano" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Tamaño"
                                                {...register('cuerpouterinotamano', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Posición Cuerpo Uterino
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="cuerpouterinoposicion"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Posición"
                                        {...register('cuerpouterinoposicion', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    
                            </div>

                            
                        </div>                     
<div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                           Consistencia Cuerpo Uterino
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="cuerpouterinoconsistencia" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Consistencia"
                                                {...register('cuerpouterinoconsistencia', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label  className="block text-ls font-medium leading-6 text-gray-900">
                                    Movilidad
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="cuerpouterinomovilidad"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Movilidad"
                                        {...register('cuerpouterinomovilidad', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    
                            </div>

                            
                        </div>   
<div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                           Forma Cuerpo Uterino
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="cuerpouterinoforma" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Forma"
                                                {...register('cuerpouterinoforma', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Otros
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="cuerpouterinootros"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Otros"
                                        {...register('cuerpouterinootros', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    
                            </div> 
                        </div>   
<div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-1">
                                      ANEXOS Y PARAMETRIOS
                                </label>
                            </div>
            
<div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                           Izquierdo
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="anexosizquierdo" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Izquierdo"
                                                {...register('anexosizquierdo', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label className="block text-ls font-medium leading-6 text-gray-900">
                                   Derecho
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="anexosderecho"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Derecho"
                                        {...register('anexosderecho', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    
                            </div>

                            
                        </div>                     
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Comentarios</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="anexosotros"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Explicaciones"
      {...register('anexosotros', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>                   

                            <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-1">
                                      LABORATORIOS
                                </label>
                            </div>
                            
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="hb" className="block text-ls font-medium leading-6 text-gray-900">
                                           HB
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="hb" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="HB"
                                                {...register('hb', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>gm</a>
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="ht" className="block text-ls font-medium leading-6 text-gray-900">
                                    HT
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="ht"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="HT"
                                        {...register('ht', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                     <a className='pt-1'>%</a>
                            </div>

                            
                        </div>    
          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="tp" className="block text-ls font-medium leading-6 text-gray-900">
                                           TP
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="tp" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="TP"
                                                {...register('tp', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>seg.</a>
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="tpt" className="block text-ls font-medium leading-6 text-gray-900">
                                    TPT
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="tpt"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="TPT"
                                        {...register('tpt', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                     <a className='pt-1'>seg.</a>
                            </div>

                            
                        </div>   

          <div className="px-5 pt-5 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="glicemia" className="block text-ls font-medium leading-6 text-gray-900">
                                           Glicemia
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="glicemia" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Glicemia"
                                                {...register('glicemia', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>gms/dl</a>
                                       
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4">
                                <label htmlFor="inr" className="block text-ls font-medium leading-6 text-gray-900">
                                    INR
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="inr"
                                        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="INR"
                                        {...register('inr', { required: false })}
                                        onChange={handleChange}
                                    />
                                    </div>
                                     <a className='pt-1'>%</a>
                            </div>

                            
                        </div>   

          <div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="vdlr" className="block text-ls font-medium leading-6 text-gray-900">
                                           VDRL + -
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="vdlr" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="VDLR"
                                                {...register('vdrl', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>
                        </div>   
          <div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="hiv" className="block text-ls font-medium leading-6 text-gray-900">
                                           HIV + -
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="hiv" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="HIV"
                                                {...register('hiv', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                        
                                       
                                    </div>
                                </div>
                        </div>  
          <div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                                
                                <div>
                                        <label htmlFor="grupo" className="block text-ls font-medium leading-6 text-gray-900">
                                           Grupo
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="grupo" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Grupo"
                                                {...register('grupo', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         
                                       
                                    </div>
                                </div>
                        </div>  

          <div className="px-5 pt-1 flex flex-wrap">

                                <div className="w-full md:w-1/2 pr-4">
                               <hr
  className="my-1 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-50" /> 
                                <div>
                                        <label htmlFor="rh" className="block text-ls font-medium leading-6 text-gray-900">
                                           RH + -
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="rh" 
                                                className="block rounded-md border-0 py-1.5 pl- pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="RH"
                                                {...register('rh', { required: false })}
                                                
                                                onChange={handleChange}
                                            />

                                        </div>
                                         <a className='pt-3'>+ -</a>
                                       
                                    </div>
                                </div>
                        </div>  

<div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-1">
                                      EXÁMENES
                                </label>
                            </div>
                      <div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-2xl font-medium leading-6 text-gray-900">
                                          ORINA
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label htmlFor="fechaorina" className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaorina"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fechaorina', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label htmlFor="orinaresultado" className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="orinaresultado"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('orinaresultado', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label htmlFor="orinatratamiento" className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="orinatratamiento"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('orinatratamiento', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
</div>
 <div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-2xl font-medium leading-6 text-gray-900">
                                          EKG
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaekg"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fechaekg', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="ekgresultado"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('ekgresultado', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="ekgtratamiento"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('ekgtratamiento', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
                            </div>

<div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-2xl font-medium leading-6 text-gray-900">
                                          USG
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechausg"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fechausg', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label htmlFor="usgresultado" className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="usgresultado"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('usgresultado', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label htmlFor="usgtratamiento" className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="usgtratamiento"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('usgtratamiento', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
</div>
 <div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-2xl font-medium leading-6 text-gray-900">
                                          PAPANICOLAOU
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechapapanicolaou"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fechapapanicolaou', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="papanicolaouresultado"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('papanicolaouresultado', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="papanicolaoutratamiento"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('papanicolaoutratamiento', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
</div>
<div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-2xl font-medium leading-6 text-gray-900">
                                          COLPOSCOPIA
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechacolposcopia"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fechacolposcopia', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="colposcopiaresultado"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('colposcopiaresultado', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="colposcopiatratamiento"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('colposcopiatratamiento', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
</div>

<div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-2xl font-medium leading-6 text-gray-900">
                                          RX
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fecharx"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fecharx', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="rxresultado"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('rxresultado', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="rxtratamiento"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('rxtratamiento', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
</div>
 <div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/2 pr-1">
                                
                                <div>
                                        <label className="block text-2xs font-medium leading-6 text-gray-900">
                                          Nombre Examen
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                              <input
      type="text"
      id="stringotro1"
      className="block rounded-md border-0 h-10  w-11/2	 py-1 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Examen"
      {...register('stringotro1', { required: false })}
      onChange={handleChange}
    />  

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaotro1"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fechaotro1', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otroresultado1"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('otroresultado1', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otrotratamiento1"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('otrotratamiento1', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
</div>

 <div className="px-5 pt-5 flex flex-wrap">
                            
             <div>
                                <div className="w-full md:w-1/2 pr-1">
                                
                                <div>
                                        <label className="block text-2xs font-medium leading-6 text-gray-900">
                                          Nombre Examen
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                              <input
      type="text"
      id="stringotro2"
      className="block rounded-md border-0 h-10  w-11/2	 py-1 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Examen"
      {...register('stringotro2', { required: false })}
      onChange={handleChange}
    />  

                                        </div>
                                    </div>
                                </div>

                                                          <div className="w-full md:w-1/3 pr-1">
    <label className="block text-ls font-medium leading-6 text-gray-900">
                                    Fecha Procedimiento
                                     
                                </label>
                               
   
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="date"
        id="fechaotro2"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Fecha Procedimiento"
        {...register('fechaotro2', { required: false })}
      />
    </div>
                                </div>  
                                
                        </div>                              
                                                                         <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Resultado</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otroresultado2"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Resultado"
      {...register('otroresultado2', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
  <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label  className="block text-ls font-medium leading-6 text-gray-900">
Tratamiento</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="otrotratamiento2"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Tratamiento"
      {...register('otrotratamiento2', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                                </div>  
                                
                            </div> 
</div>                           

<div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5">
                                       C
                                </label>
                                </div>
                      <div className="px-5 pt-5 flex flex-wrap">
                            
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label htmlFor="c1" className="block text-ls font-medium leading-6 text-gray-900">
                                           1
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="c1" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="1"
                                                {...register('c1', { required: false })}
                                               
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-ls font-medium leading-6 text-gray-900">
                                           2
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="c2" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="2"
                                                {...register('c2', { required: false })}
                                               
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                        </div>     
     <div className="px-5 pt-5 flex flex-wrap">
                            
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label htmlFor="c3" className="block text-ls font-medium leading-6 text-gray-900">
                                           3
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="c3" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="3"
                                                {...register('c3', { required: false })}
                                               
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 pr-1">
                                
                                <div>
                                        <label className="block text-ls font-medium leading-6 text-gray-900">
                                           4
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                id="c4" 
                                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="4"
                                                {...register('c4', { required: false })}
                                               
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </div>
                                </div>

                            </div>  

                                                                       <div className=" pt-5 flex flex-wrap">
                            
<div className="w-full md:w-full  pt-1 px-4">
                                
                   <div>
  <label className="block text-ls font-medium leading-6 text-gray-900">
Plan Terapéutico</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      id="planterapeutico"
      className="block rounded-md border-0 h-24 w-full	 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Plan Terapéutico"
      {...register('planterapeutico', { required: false })}
      onChange={handleChange}
    />
  </div>
                            </div>
                            </div>
                            </div>
                            <div>
<label className="block text-ls font-medium text-rose-500 px-5 pt-5 pb-5">
                                       OTROS REGISTROS
                                </label>
                            </div>

                              <div className="w-full md:w-1/3 pl-4">
    <label htmlFor="fecharegistro" className="block text-ls font-medium leading-6 text-gray-900">
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
                                        <label htmlFor="valseg" className="block text-ls font-medium leading-6 text-gray-900">
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
                                <label htmlFor="ri" className="block text-ls font-medium leading-6 text-gray-900">
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

            <label className=" block text-ls font-medium leading-6 text-gray-900  pt-5 pb-5">
                                    Acepto Ayuda?
                                </label>                 

          <div className="px-5 pt-5 flex flex-wrap border border-gray-300 rounded-lg p-1">

                                <div className="w-full md:w-1/4 pr-4">
                                
                                <div>
                                        <label className="block text-ls font-medium leading-6 text-gray-900">
                                            P S
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label htmlFor="psalgunavez" className="block text-ls font-medium text-gray-900">
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
                                    <label  className="block text-ls font-medium text-gray-900">
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
                                    <label  className="block text-ls font-medium text-gray-900">
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
                                        <label className="block text-ls font-medium leading-6 text-gray-900">
                                            F I
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
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
                                    <label  className="block text-ls font-medium text-gray-900">
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
                                    <label htmlFor="fipareja" className="block text-ls font-medium text-gray-900">
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
                                        <label className="block text-ls font-medium leading-6 text-gray-900">
                                            S X
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label  className="block text-ls font-medium text-gray-900">
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
                                    <label  className="block text-ls font-medium text-gray-900">
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
                                    <label htmlFor="sxpareja" className="block text-ls font-medium text-gray-900">
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
                                        <label  className="block text-ls font-medium leading-6 text-gray-900">
                                            A N
                                        </label>
                                        
                                    </div>
                                </div>

                            <div className="w-full md:w-1/2 pl-4 ">
  <div className="px-5 pt-5 flex flex-wrap">
                                <div className="w-full md:w-1/3 pr-4 border border-gray-300 rounded-lg p-4">
                                    <label className="block text-ls font-medium text-gray-900">
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
                                    <label  className="block text-ls font-medium text-gray-900">
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
                                    <label htmlFor="an_pareja" className="block text-ls font-medium text-gray-900">
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
