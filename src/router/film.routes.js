import { Layout, List, AddEdit, ListProgrammazione, AddProgrammazione, buyTkts } from '@/views/films';

export default {
    path: '/films',
    component: Layout,
    children: [
        { path: '', component: List },
        { path: 'add', component: AddEdit },
        { path: 'edit/:id', component: AddEdit },
        { path: 'programmazione/:id', component: ListProgrammazione },
        { path: 'programmazione/add/:id', component: AddProgrammazione },
        { path: 'buy/:id', component: buyTkts }
    ]
};