import React, { useState, useEffect, useRef } from "react";
import { Button, message } from "antd";
import "./_style.scss";
import "../../../css/app.scss";
import SearchBar from "../../atoms/SearchBar/search-bar";
import PaginationAdm from "../../atoms/pagination/pagination";
import AvatarSection from "../../molecules/AvatarSection/avatar-section";
import NoResults from "../../atoms/NoResults/no-results.jsx";
import apiCalls from "../../../services/api-calls/all";
import { useRedirect } from "../../Router/redirect";
import { processedErrorMessage } from "../../../services/api-calls/helpers";
import { compare } from "../../../utils/func-helpers";
import { CREATE_USER_URL, PAGE_SIZE } from "../../../utils/constants";

const { findAllUsersPaginated, disableUser, enableUser } = apiCalls();

const Users = () => {
  const [users, setUsers] = useState([]);
  const [criteria, setCriteria] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const { redirect, setUrlToRedirect } = useRedirect();

  const findUsersPaginated = async () => {
    try {
      // TODO: sacarle este filters a la api call
      const pageContent = await findAllUsersPaginated(
        criuseRedirectteria,
        page - 1,
        PAGE_SIZE,
        filters
      );
      const newUserList = pageContent.content;
      setTotalPages(pageContent.totalPages * 10);
      const processedUserList = Object.values(newUserList).sort((a, b) =>
        compare(a, b, "name")
      );
      setUsers(processedUserList);
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      message.error(errorMessage);
    }
  };
  Users;
  useEffect(() => {
    findUsersPaginated();
  }, [criteria, page]);

  const switchStatus = async (id) => {
    const selectedUser = users.find((user) => user.id === id);
    const endpoint = selectedUser.active ? disableUser : enableUser;
    try {
      await endpoint(id);
      findUsersPaginated();
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      message.error(errorMessage);
    }
  };

  return (
    <div>
      {redirect()}
      <div className="mainSectionAdmin">
        <div className="SearchSection">
          <div className="titleSection">
            <div>
              <img src="img/settings.png" alt="settings" />
            </div>
            <h2>Administración de Usuarios</h2>
          </div>
          <SearchBar setSearchCriteria={setCriteria} />
        </div>
        <div className="imgPlus">
          <button onClick={() => setUrlToRedirect(CREATE_USER_URL)}>
            <img src="img/plus.png" alt="add User" /> Crear usuario
          </button>
        </div>
        {users.length !== 0 && (
          <AvatarSection users={users} switchStatus={switchStatus} />
        )}
        {users.length === 0 && <NoResults />}
        <PaginationAdm
          defaultCurrent={page}
          total={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
};

export default Users;
