import dbconnection from "../config/config";

export async function executeStoredProcedure(
  nombreSP: string,
  parametros: any[] = []
): Promise<any> {
  const placeholders = parametros.map(() => '?').join(',');
  const sql = `CALL ${nombreSP}(${placeholders})`;

  try {
    const [results] = await dbconnection.execute(sql, parametros);
    return results;
  } catch (error) {
    console.error(`Error al ejecutar el SP "${nombreSP}":`, error);
    throw error;
  }
}