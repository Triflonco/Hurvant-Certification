import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Trash2, Archive, CheckCircle } from "lucide-react";

export default function Admin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("hurvant_contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  const updateStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from("hurvant_contacts")
      .update({ status: newStatus })
      .eq("id", id);
      
    if (!error) fetchContacts();
  };

  const deleteContact = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este mensaje?")) return;
    
    const { error } = await supabase
      .from("hurvant_contacts")
      .delete()
      .eq("id", id);
      
    if (!error) fetchContacts();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "nuevo": return "bg-blue-100 text-blue-800";
      case "contactado": return "bg-green-100 text-green-800";
      case "archivado": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up">
      <div className="flex justify-between items-center mb-8 border-b-3 border-hurvant-navy pb-6">
        <div>
          <span className="text-xs font-bold text-hurvant-indigo uppercase tracking-widest block mb-1">Administración</span>
          <h2 className="text-3xl sm:text-4xl font-black text-hurvant-navy tracking-tight">Panel de Contactos</h2>
        </div>
        <button onClick={() => window.location.hash = "#home"} className="bg-white border border-slate-200 px-4 py-2 rounded-custom-md text-sm font-medium hover:bg-slate-50 transition-colors">
          Volver a la web
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-medium">Cargando mensajes...</div>
      ) : contacts.length === 0 ? (
        <div className="glass-card bg-white p-12 rounded-custom-lg border border-slate-200/60 text-center">
          <h3 className="text-xl font-bold text-hurvant-navy mb-2">Bandeja vacía</h3>
          <p className="text-slate-500">Aún no has recibido ningún mensaje de contacto en Hurvant.</p>
        </div>
      ) : (
        <div className="glass-card bg-white rounded-custom-lg border border-slate-200/60 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-bold text-xs uppercase text-slate-600">Fecha</th>
                  <th className="p-4 font-bold text-xs uppercase text-slate-600">Cliente</th>
                  <th className="p-4 font-bold text-xs uppercase text-slate-600">Servicio</th>
                  <th className="p-4 font-bold text-xs uppercase text-slate-600">Estado</th>
                  <th className="p-4 font-bold text-xs uppercase text-slate-600">Mensaje</th>
                  <th className="p-4 font-bold text-xs uppercase text-slate-600 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-xs font-medium text-slate-500 whitespace-nowrap">
                      {new Date(contact.created_at).toLocaleDateString("es-ES", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-sm text-hurvant-navy">{contact.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{contact.email}</div>
                      <div className="text-xs text-slate-500">{contact.phone}</div>
                    </td>
                    <td className="p-4 text-xs font-bold text-slate-700 capitalize">{contact.service}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-custom-sm text-[10px] font-bold uppercase tracking-wider ${getStatusColor(contact.status || 'nuevo')}`}>
                        {contact.status || 'nuevo'}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-600 max-w-xs" title={contact.message}>
                      <div className="line-clamp-3 whitespace-pre-wrap">{contact.message}</div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1.5">
                        {contact.status !== "contactado" && (
                          <button onClick={() => updateStatus(contact.id, "contactado")} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-custom-sm transition-colors" title="Marcar como contactado">
                            <CheckCircle size={16} strokeWidth={2.5} />
                          </button>
                        )}
                        {contact.status !== "archivado" && (
                          <button onClick={() => updateStatus(contact.id, "archivado")} className="p-2 text-slate-600 hover:bg-slate-100 rounded-custom-sm transition-colors" title="Archivar">
                            <Archive size={16} strokeWidth={2.5} />
                          </button>
                        )}
                        <button onClick={() => deleteContact(contact.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-custom-sm transition-colors" title="Eliminar mensaje">
                          <Trash2 size={16} strokeWidth={2.5} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
