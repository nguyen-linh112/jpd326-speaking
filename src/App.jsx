import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Backup from './pages/Backup.jsx';
import DialogueDetail from './pages/DialogueDetail.jsx';
import DialogueList from './pages/DialogueList.jsx';
import Exam from './pages/Exam.jsx';
import Home from './pages/Home.jsx';
import QuestionDetail from './pages/QuestionDetail.jsx';
import QuestionList from './pages/QuestionList.jsx';

// Dùng HashRouter để deploy lên GitHub Pages / hosting tĩnh mà không cần cấu hình rewrite.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dialogues" element={<DialogueList />} />
          <Route path="dialogues/:id" element={<DialogueDetail />} />
          <Route path="questions" element={<QuestionList />} />
          <Route path="questions/:id" element={<QuestionDetail />} />
          <Route path="exam" element={<Exam />} />
          <Route path="backup" element={<Backup />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
