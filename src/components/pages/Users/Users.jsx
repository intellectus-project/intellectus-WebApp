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
const pageContent = {
  content: [
      {
        id: 5,
        name: 'Guillermo',
        lastName: 'Zone',
        email: 'gpanich+zone@atixlabs.com',
        phone: '155555555555',
        username: 'gpanich+zone@atixlabs.com',
        ssoUser: false,
        role: {
          id: 3,
          code: 'ROLE_ANALYST',
          description: 'Analyst'
        },
        active: true,
        type: 'ZONES',
        zone: {
          id: 1,
          name: 'Africa',
          countries: [
            {
              id: 1,
              name: 'Botswana',
              code: 'BWA'
            },
            {
              id: 2,
              name: 'Ghana',
              code: 'GHA'
            },
            {
              id: 3,
              name: 'Lesotho',
              code: 'LSO'
            },
            {
              id: 4,
              name: 'Mozambique',
              code: 'MOZ'
            },
            {
              id: 5,
              name: 'Namibia',
              code: 'NAM'
            },
            {
              id: 6,
              name: 'Nigeria',
              code: 'NGA'
            },
            {
              id: 7,
              name: 'South Africa',
              code: 'ZAF'
            },
            {
              id: 8,
              name: 'Swaziland',
              code: 'SWZ'
            },
            {
              id: 9,
              name: 'Tanzania',
              code: 'TZA'
            },
            {
              id: 10,
              name: 'Uganda',
              code: 'UGA'
            },
            {
              id: 11,
              name: 'Zambia',
              code: 'ZMB'
            },
            {
              id: 12,
              name: 'Zimbabwe',
              code: 'ZWE'
            }
          ]
        },
        country: null
      },
      {
        id: 4,
        name: 'Mirko',
        lastName: 'Viewer',
        email: 'mhuaygua+viewer@atixlabs.com',
        phone: '7654345678',
        username: 'mhuaygua+viewer@atixlabs.com',
        ssoUser: true,
        role: {
          id: 2,
          code: 'ROLE_VIEWER',
          description: 'Viewer'
        },
        active: true,
        type: 'ZONES',
        zone: {
          id: 3,
          name: 'Europe',
          countries: [
            {
              id: 18,
              name: 'Belgium',
              code: 'BEL'
            },
            {
              id: 19,
              name: 'Canary Islands',
              code: null
            },
            {
              id: 20,
              name: 'Germany',
              code: 'DEU'
            },
            {
              id: 21,
              name: 'United Kingdom',
              code: 'GBR'
            },
            {
              id: 22,
              name: 'Luxembourg',
              code: 'LUX'
            },
            {
              id: 23,
              name: 'Netherlands',
              code: 'NLD'
            },
            {
              id: 24,
              name: 'Russia',
              code: 'RUS'
            },
            {
              id: 25,
              name: 'Ukraine',
              code: 'UKR'
            },
            {
              id: 26,
              name: 'Spain',
              code: 'ESP'
            },
            {
              id: 27,
              name: 'France',
              code: 'FRA'
            },
            {
              id: 28,
              name: 'Italy',
              code: 'ITA'
            }
          ]
        },
        country: null
      },
      {
        id: 3,
        name: 'Monica',
        lastName: 'Test',
        email: 'mhuaygua+admin@atixlabs.com',
        phone: '1234567890987',
        username: 'mhuaygua+admin@atixlabs.com',
        role: {
          id: 1,
          code: 'ROLE_ADMIN',
          description: 'Administrator'
        },
        active: true,
        type: 'GLOBAL',
        zone: null,
        ssoUser: false,
        country: null
      }
    ],
    pageable: {
      sort: {
        sorted: true,
        unsorted: false,
        empty: false
      },
      pageNumber: 1,
      pageSize: 3,
      offset: 3,
      paged: true,
      unpaged: false
    },
    last: false,
    totalPages: 3,
    totalElements: 8,
    sort: {
      sorted: true,
      unsorted: false,
      empty: false
    },
    first: false,
    size: 3,
    number: 1,
    numberOfElements: 3,
    empty: false
  }
const Users = () => {
  const [users, setUsers] = useState([]);
  const [criteria, setCriteria] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const { redirect, setUrlToRedirect } = useRedirect();

  const findUsersPaginated = async () => {
    try {
      // TODO: sacarle este filters a la api call
      // const pageContent = await findAllUsersPaginated(
      //   criteria,
      //   page - 1,
      //   PAGE_SIZE,
      //   filters
      // );
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
